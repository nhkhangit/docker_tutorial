# docker_tutorial
## Lệnh cơ bản
##### 1. docker > enter
> Để xem danh sách các lệnh con của docker 
##### 2. docker image --helps
> Để xem danh sách các lệnh con của docker image
##### 3. docker images
> Để kiểm tra xem docker đang có những image nào
##### 4. docker search keyword
> Key word ở đây là tên của image mà bạn muốn tìm kiếm. <br/> 
Những phiên bản chính chủ thì sẽ có tag [OK] tại cột OFFICIAL.
##### 5. docker pull image:tag
> Để tải một image ta sẽ sử dụng lệnh này. Trong đó **image** sẽ là tên của **image** còn tag sẽ là tên của tag hay version

##### 6. docker image rm (image:tag) || id
> Để xóa một image mà ta không muốn sử dụng nữa. Trong đó **image** là tên image và tag là tên tag hay version. <br/>
Hoặc chúng ta có thể sử dụng image id thay cho image:tag.
##### 7. docker run params  (image:tag) || id
> Để khởi chạy một container ta sẽ sử dụng lệnh này, trong đó: chúng ta cần thêm vào các params và image:tag hay id để xác định là image nào sẽ khởi chạy. Với: <br/>
>Params:<br/> 
>(-i) Để nhận tương tác.<br/>
>(-t) Nếu container đó kết nối với terminal.<br/>
>(--name "NAME_UPDATE") Nếu chúng ta muốn đặt tên cho container mà không sử dụng tên tự động.<br/>
>(-h HOST_NAME) Nếu chúng ta muốn đặt lại hostname cho container.<br/>
##### 8. docker ps
> Để kiểm tra danh sách các container đang khởi chạy.
##### 9. docker ps -a
> Để kiểm tra danh sách các container đang và không khởi chạy.

##### 10. docker start NAME || CONTAINER_ID
> Nếu một container đang bị dừng, chúng ta muốn khởi chạy lại thì sử dụng lệnh trên. Trong đó chúng ta có thể truyền vào id container hoặc name của container đó.

##### 11. docker attach CONTAINER_ID
> Khi một container đang khởi chạy mà chúng ta đã lỡ tắt terminal, chúng ta có thể truy cập lại vào container bằng lệnh trên. trong đó **CONTAINER_ID** là id của của Container

##### 12. Ctrl +p, Ctr + q
> Nếu chúng ta muốn thoát một container mà vẫn cho container tiếp tục chạy.

##### 13. docker stop NAME || CONTAINER_ID
> Nếu chúng ta đang đứng ngoài một container đang chạy và muốn container này dừng lại. Thì ta sử dụng lệnh trên với **NAME** hoặc với **CONTAINER_ID** tương ứng.

##### 14. docker rm CONTAINER_ID || NAME 
> Để xóa một container không còn muốn sử dụng nữa trong trạng thái không hoạt động.

##### 15. docker rm -f CONTAINER_ID || NAME
> Để xóa một container không còn muốn sử dụng trong trạng thái vẫn còn đang hoạt động.

##### 16. 
## Khái niệm
##### 1. Images
> Images trong docker là các phần mềm được đóng gói và quản lý bởi docker. <br/>
Các Image trong docker chỉ có thể đọc không thể sửa đổi.<br/>
##### 2. Container
> Khi image được docker khởi chạy thì phiên bản thực thi của image được
gọi là các container <br/>
Các container thì có thể ghi được dữ liệu vào trong nó. <br/>
Ảnh minh họa:
![image](https://user-images.githubusercontent.com/84958646/219869218-f1b84c49-9cf9-45c5-a305-923ced8cb73b.png)


