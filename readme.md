## 使用 NodeJS & Express 運行的留言板
- 將 PHP 版本的留言板移植到 Node JS & Express 平台來運行  
- 這是參與 Lidemy Mentor Program 時的作業，來源：https://github.com/Lidemy/mentor-program-kristxeng#%E7%AC%AC%E5%8D%81%E4%B8%80%E9%80%B10416--0422%E5%BE%8C%E7%AB%AF%E6%A1%86%E6%9E%B6%E4%B8%8A  

## 後端
**資料庫**  
- 與 PHP 留言板共用資料表，所以使用 `node-php-password` 套件存取原先 PHP hash 的用戶密碼表。  
- 使用 `mysql` 套件連結資料庫，也透過內建的 prepare statement 功能來預防 SQL injection。  

**使用者登入系統**  
- 大致將 PHP 版本留言板後端邏輯移植，一樣使用 session 驗證使用者登入。  
- 因為與 PHP 版本共用資料表，所以透過 `node-php-password` 套件驗證密碼。NodeJS 版留言板新增的使用者密碼也可以順利地被 PHP 版本讀取。  

**主機系統**  
- 主機：AWS EC2  
- 系統：ubuntu 16.04 / NodeJS 8.11 / Express 4  
- 使用 PM2 套件於伺服器端運行。  

## 前端
網頁渲染模板選用 EJS，EJS 與原生的 HTML 相容，所以不用大幅變更原本的 HTML 結構，只需要將原本 PHP 渲染的部分抽換成 EJS 即可。EJS 使用 `<% %>` 包裹程式碼，如果使用 `<%= %>` 包裹變數，會預處理 HTML escape 再輸出，因此已經免除了 XSS 的問題。  

## 待處理事項
- 從 app.js 裡將 Controller 分離。  
- 修改/刪除留言之前要驗證使用者。  
