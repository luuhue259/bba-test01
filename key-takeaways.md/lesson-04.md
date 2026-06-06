# Lesson4: Javascript & DOM
## Function
1. Function là gì?
- Function (Hàm) là một khối lệnh được đặt tên, có thể gọi lại nhiều lần mà không cần viết lại code.
2. Cách khai báo function
- Cú pháp đơn giản 
function tenHam () {
    //cac domg lenh ben trong
}
  - function — từ khoá bắt buộc
  - tenHam — tên do bạn đặt
  - {} — thân hàm, chứa code sẽ thực thi
- Quy tắc đặt tên hàm: 
    - Dùng camelCase: tinhTong , layDuLieu , hienThiSanPham
    - Nên bắt đầu bằng động từ: tinh... , lay... , hienThi... , kiemTra...
    - Tên phải diễn tả hành động mà hàm thực hiện

3. Gọi hàm — Function thực thi
- Khai báo ≠ Thực thi
- Gọi hàm = tên hàm + dấu ()
- Gọi nhiều lần

4. Function với tham số (Parameter)
5. Function có giá trị trả về: return
- Ngoài việc làm gì đó (in ra console), hàm còn có thể trả về kết quả để dùng tiếp.


## DOM


### x path tuyệt đối: /html/body/div/p

### x path tương đối:  //tên thẻ [@thuộc tính = giá trị]: tìm bất cứ chỗ nào trong dom dựa vào đặc tính của nó => 99% là dùng cái này

<div id = "Phong"> xin chao</div>

cú pháp: //div@id=phong
     //h1[@class= 'ecommerce-title']
     //img[@src='product-02.jpg' and @alt='Product 2']