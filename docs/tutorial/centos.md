## CentOS离线安装Nvidia-Docker
### 在一台联网的机器上执行
```shell
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.repo | sudo tee /etc/yum.repos.d/nvidia-docker.repo
 
yum install --downloadonly nvidia-docker2 --downloaddir=/tmp/nvidia
```

### 将以上安装包上传到无法联网的服务器
#### 执行
```shell
rpm -ivh libnvidia-container1-1.1.1-1.x86_64.rpm libnvidia-container-tools-1.1.1-1.x86_64.rpm
 
rpm -ivh nvidia-container-runtime-3.2.0-1.x86_64.rpm nvidia-container-toolkit-1.1.2-2.x86_64.rpm nvidia-docker2-2.3.0-1.noarch.rpm 
```

附：安装包链接

包括docker和nvidia-docker所有依赖

链接：https://pan.baidu.com/s/1PfCYUjq3pZU0Dq01Gr3LZA
提取码：tiry 