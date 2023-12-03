# 食在工大——食堂订餐配送系统

>“食在工大——食堂订餐配送系统”是基于Vue开发的Web应用系统，通过餐品展示、餐品订购、订单分配等模块实现即时、高效的订单配送功能。 
>本系统旨在为校园订餐配送提供软件支持，以期解决学生日益增长的对美好饮食服务的需要与现系统不够实用不够完善的矛盾。

## 界面截图

![Image of Home Page Light Theme](/static/main-light.png)

![Image of Home Page Dark Theme](/static/main-dark.png)

![Image of Home Page with items in cart](/static/main-light-items-in-cart.png)

![Image of Cart Page Light Theme](/static/cart-light.png)

## 部署方法

1. 使用docker
    - 建立docker镜像
    ```bash docker build -t npu-food .  ```

    - 建立docker容器
    ```bash docker run -it -p 5000:5000 npu-food```

    - 访问 ``` localhost:5000```

2. 不使用docker

克隆此仓库后执行以下命令：

```bash
# 安装依赖项
$ npm install

# 在 localhost:3000 进行热重载服务
$ npm run dev

# 构建并启动
$ npm run build
$ npm run start

# 生成静态工程
$ npm run generate
```
