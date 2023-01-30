pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/sreadytocode/WordFinder/tree/feature/jenkins', branch: 'main')
      }
    }

  }
}