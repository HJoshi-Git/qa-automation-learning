pipeline {
    agent any

    environment {
        PATH = "${env.PATH}:/usr/local/bin"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/HJoshi-Git/qa-automation-learning.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'echo $PATH'  // Test: This should now print the updated PATH
                sh 'which node || echo "Node not found in PATH"'
                sh 'which npm || echo "NPM not found in PATH"'
                // Add your actual install commands
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright install --with-deps'
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            // Only archive if test results exist
            script {
                if (fileExists('**/test-results/**/*.xml')) {
                    junit '**/test-results/**/*.xml'
                    archiveArtifacts artifacts: '**/test-results/**/*.xml', allowEmptyArchive: true
                }
            }
        }
    }
}