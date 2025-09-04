pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/HJoshi-Git/qa-automation-learning.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
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
