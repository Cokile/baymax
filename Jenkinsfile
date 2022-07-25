node {
    stage('Checkout') {
        git url: 'https://github.com/Cokile/baymax.git', branch: env.BRANCH_NAME
    }

    stage('Install Dependencies') {
        sh 'npm install'
    }

    stage('Build') {
        sh 'npm run clean'
        sh 'npm run build'
    }

    stage('Run') {
        sh 'npm run stop'
        sh 'npm start'
    }
}
