require('dotenv').config({
    // path: '/Users/yuan/Desktop/Node/.env'
    // 如果設定檔不是直接放在最外面，就要給路徑
});

console.log(process.env.DB_USER);

// 會自動往外找到.env設定檔