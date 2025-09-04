pipeline {
    agent any
    
    environment {
        // Safely append to PATH (this preserves existing paths)
        PATH = "/usr/local/bin:${env.PATH}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Your git checkout step (already working)
                git branch: 'main', url: 'https://github.com/HJoshi-Git/qa-automation-learning.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Now sh should work; add your actual commands here, e.g.:
                sh 'npm install'  // Or whatever dependency installation you need
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
            junit '**/test-results/**/*.xml'
            archiveArtifacts artifacts: '**/test-results/**/*.xml', allowEmptyArchive: true
        }
    }
}
