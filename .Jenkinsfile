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
                bat label: 'React start script', script: 'C:\\Amit\\Projects\\React Projects\\react-harry-potter\\npm start'
            }
        }
        stage('Build') {
            steps {
                bat label: 'React build script', script: 'C:\\Amit\\Projects\\React Projects\\react-harry-potter\\npm run build'
            }
        }
    }    
}

