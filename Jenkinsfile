pipeline {
    agent any
    tools {
        nodejs 'node-js'
    }
    stages {
        stage('install dependencies') {
            steps {
                    sh 'yarn install'
            }
        }
        stage('build develop') {
            when {
                branch 'develop'
            }

            steps {
                    sh 'yarn build'
            }
        }
        stage('Send to s3 bucket') 
        {
            when {
                branch 'develop'
            }
            steps 
            {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                     credentialsId: 'awscredentials',
                      secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']])
                {
                        script{
                            dir('build')
                           {
                                sh "aws s3 sync . s3://toncv.fiker.fr --region eu-west-3 --cache-control 'max-age=31536000'"
                                sh "aws cloudfront create-invalidation --distribution-id E23QHTFNBLXXFO --paths '/*'"
                           }
                       }
                }
            }  
        }

    }
}
