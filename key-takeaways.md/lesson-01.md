# Kiến thức được học trong buổi 1
## 1. Playwright
- Là một framework
- Tiền thân là Puppeteer, được Microsoft tài trợ và phát triển lên.
- Ưu điểm:
    - Cross browser
    - Cross platform
    - Nhiều tính năng xịn: auto waiting, auto-retry assertion giúp giảm flaky tests (lúc pass,lúc fail)
    - Report đầy đủ thông tin
    - Code gen
- Học Playwright vì:
    - Dễ cài đặt
    - Cú pháp đơn giản
    - Framework trending, nhiều cơ hội việc làm

## 2. Các công cụ
- NVM = Node Version Manager = quản lý các phiên bản NodeJs
- NodeJs = Công cụ để chạy code (có 2 options cài đặt)
    - Cài trực tiếp NodeJS vào máy
    - **Cài thông qua NVM** => để dễ chuyển đổi nhiều phiên bản NodeJS
- Git: quản lý source code
- GitHub: chia sẻ code, làm việc nhóm
- Một số cấu hình mặc định Git:
    - Config username: git config --global user.name “tên bạn”
    - Config email: git config --global user.email “email của bạn”
    - Config branch default: git config --global init.defaultBranch main

## 3. Kết nối GitHub
- SSH key: Cặp khóa
    - id_rsa và id_rsa.pub
    - id_rsa: cần giữ bí mật
    - id_rsa.pub: có thể gửi cho người khác
- Lệnh tạo SSH Keys: ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
- Lấy nội dung ssh key: cat ~/.ssh/id_rsa.pub
- Truy cập: https://github.com/settings/ssh/new để thêm ssh key

## 4. Cài đặt Playwright
- Tạo thư mục
- Mở thư mục bằng VS Code
- Chạy lệnh **npm init playwright@latest** ở terminal

## 5. Đưa code lên GitHub
- Tạo repo
    - Truy cập https://github.com/new
    - Điền tên repository
    - Chọn "Public"
- Khởi tạo
    - Khởi tạo repo local: git init
    - Liên kết repository vừa tạo với Git: git remote add origin ssh_link
    - Thêm code: git add .
    - Thêm commit: git commit -m"init project
- Push code: git push origin main