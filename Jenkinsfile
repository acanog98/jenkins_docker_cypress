pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Build') {
            steps {
                echo "Building Application"
            }
        }

        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --spec cypress/e2e/features/simuladores_santander.feature"
            }
        }
    }

    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/mochawesome-report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}