pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/HJoshi-Git/qa-automation-learning.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                withEnv(["PATH+EXTRA=/usr/local/bin"]) {
                    sh 'echo "Current PATH: $PATH"'
                    sh 'which node || echo "Node not found in PATH"'
                    sh 'which npm || echo "NPM not found in PATH"'
                    sh 'npm install'
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                withEnv(["PATH+EXTRA=/usr/local/bin"]) {
                    sh 'npx playwright install --with-deps'
                    sh 'npx playwright test'
                }
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