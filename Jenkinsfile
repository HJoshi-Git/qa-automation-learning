pipeline {
    agent any
    
    environment {
        // Correct way to append to PATH (uses string interpolation)
        PATH = "/usr/local/bin:${env.PATH}"
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
                // Add your actual install commands, e.g., sh 'npm install' or 'pip install -r requirements.txt'
            }
        }
        
        // Add more stages as needed
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
