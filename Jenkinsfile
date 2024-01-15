node {
    def WORKSPACE = "/var/lib/jenkins/workspace/laundry"
    def dockerImageTag = "laundry-fo-deploy${env.BUILD_NUMBER}"
    try{
        stage('Clone Repo') {
            git url: 'https://github.com/Sipoufo/laundry_pro.git',
                branch: 'main'
            sh 'npm install'
         }
        stage('Build docker') {
             dockerImage = docker.build("laundry-fo-deploy:${env.BUILD_NUMBER}")
        }
        stage('Deploy docker'){
              echo "Docker Image Tag Name: ${dockerImageTag}"
              sh "docker stop laundry-fo-deploy || true && docker rm laundry-fo-deploy || true"
              sh "docker run --net=host --name laundry-fo-deploy -d -p 3000:3000 laundry-fo-deploy:${env.BUILD_NUMBER}"
        }
    }catch(e){
        throw e
    }
}
