pipeline {
    agent any

    stages {
        stage('Start') {
            steps {
                echo 'React start script'
            }
        }
        stage('Develop') {
            steps {
                bat label: 'React start script', script: 'npm.cmd run start'
            }
        }
        stage('Build') {
            steps {
                bat label: 'React build script', script: 'npm.cmd run build'
            }
        }
    }    
}

