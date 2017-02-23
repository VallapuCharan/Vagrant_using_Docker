echo "*******************************" 
echo "Provisioning virtual machine..."
echo "*******************************" 
 
echo "***********************"
echo "Updating apt sources..."
echo "***********************"
sudo apt-get -qq update
 
echo "***********************************"
echo "Install java"
echo "***********************************"
sudo add-apt-repository -y ppa:webupd8team/java
sudo apt-get update
sudo apt-get -y upgrade
echo debconf shared/accepted-oracle-license-v1-1 select true | sudo debconf-set-selections
echo debconf shared/accepted-oracle-license-v1-1 seen true | sudo debconf-set-selections
sudo apt-get -y install oracle-java8-installer

echo "***********************************"
echo "Install and re-link node and npm..."
echo "***********************************"
wget -qO- https://deb.nodesource.com/setup_7.x | sudo bash -
sudo apt-get install -y nodejs

echo "***********************************"
echo "Install protractor"
echo "***********************************"
sudo npm install -g protractor
 
echo "*********************************"
echo "Success! Navigate to localhost..."
echo "*********************************"