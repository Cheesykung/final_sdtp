pipeline {
    agent any

    stages {
        stage('pull code') {
            steps {
                cleanWs()
                git branch: 'master', url: 'https://github.com/Cheesykung/final_sdtp'
            }
        }
        stage('build'){
            steps{
                bat "docker-compose -f docker-compose-build.yaml build"
            }
        }
        stage('deploy to docker hub'){
            // steps{
            //     bat "docker tag frontend_front-end 62070122/final_sdtp_front-end2"
            //     bat "docker tag frontend_back-end 62070122/final_sdtp_back-end2"
            //     bat "docker push 62070122/final_sdtp_front-end2"
            //     bat "docker push 62070122/final_sdtp_back-end2"
            // }
            echo "deploy"
        }
    }
}