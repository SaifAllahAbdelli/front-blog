import React from "react";

import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";

import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
  AppointmentTooltip,
  ConfirmationDialog,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";

import SpinnerSmall from "../SpinnerSmall/SpinnerSmall";

import { useDispatch, useSelector } from "react-redux";
import {
  addAppointment,
  deleteAppointment,
  modifyAppointment,
} from "../../redux/actions/admin/appointmentsActions";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../Notification/Notification";

function CalenderBody() {
  // Redux hooks
  const appointments = useSelector((state) => state.appointments);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  const commitChanges = async ({ added, changed, deleted }) => {
    if (added) {
      await dispatch(addAppointment(added, true));

      toast(
        <Notification type="success" withIcon message="Rendez-vous ajouté" />
      );
    }
    if (changed) {
      dispatch(modifyAppointment(changed));
    }
    if (deleted !== undefined) {
      dispatch(deleteAppointment(deleted));
    }
  };

  const Appointment = ({ children, style, ...restProps }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        backgroundColor: "#ef476f",
        borderRadius: "0.5rem",
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      {children}
    </Appointments.Appointment>
  );

  const body = (
    <Scheduler data={appointments}>
      <ViewState defaultCurrentViewName="Day" />

      {/* Editing appointments */}

      <EditingState onCommitChanges={commitChanges} />
      <IntegratedEditing />
      <ConfirmationDialog
        messages={{
          discardButton: "Ignorer",
          deleteButton: "Supprimer",
          cancelButton: "Annuler",
          confirmDeleteMessage:
            "Voulez-vous vraiment supprimer ce rendez-vous ?",
          confirmCancelMessage: "Ignorer les modifications non enregistrées ?",
        }}
      />

      {/* Day/Week/Month filters */}

      <DayView
        startDayHour={8}
        endDayHour={18}
        cellDuration={60}
        displayName="Journée"
      />
      <WeekView
        startDayHour={8}
        endDayHour={18}
        cellDuration={60}
        displayName="Semaine"
      />
      <MonthView displayName="Mois" />

      <Toolbar />
      <ViewSwitcher />
      <DateNavigator />

      {/* Take me to todays date */}
      <TodayButton messages={{ today: "Aujourd'hui" }} />

      {/* Appointments */}
      <Appointments appointmentComponent={Appointment} />
      <AppointmentTooltip showCloseButton showOpenButton />
      <AppointmentForm
        messages={{
          detailsLabel: "Détails",
          allDayLabel: "Toute la journée",
          commitCommand: "Sauvegarder",
          moreInformationLabel: "Plus d'information",
          repeatLabel: "Répéter",
          daily: "Quotidien",
          weekly: "Hebdomadaire",
          monthly: "Mensuel",
          yearly: "Annuel",
          repeatEveryLabel: "Répéter",
          daysLabel: "Jour(s)",
          endRepeatLabel: "Terminer la répétition",
          never: "Jamais",
          onLabel: "Au",
          afterLabel: "Après",
        }}
      />
    </Scheduler>
  );

  return loading ? <SpinnerSmall /> : body;
}

export default CalenderBody;
