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
>(-v) Để chia sẻ dữ liệu từ máy host vào container. Và khi container bị xóa thì dữ liệu tại máy host vẫn giữ nguyên. <br/>

##### 8. docker ps
> Để kiểm tra danh sách các container đang khởi chạy.
##### 9. docker ps -a
> Để kiểm tra danh sách các container đang và không khởi chạy.

##### 10. docker start NAME || CONTAINER_ID
> Nếu một container đang bị dừng, chúng ta muốn khởi chạy lại thì sử dụng lệnh trên. Trong đó chúng ta có thể truyền vào id container hoặc name của container đó.

##### 11. docker attach CONTAINER_ID
> Khi một container đang khởi chạy mà chúng ta đã lỡ tắt terminal, chúng ta có thể truy cập lại vào container bằng lệnh trên. trong đó **CONTAINER_ID** là id của của Container

##### 12. Ctrl +p, q
> Nếu chúng ta muốn thoát một container mà vẫn cho container tiếp tục chạy.

##### 13. docker stop NAME || CONTAINER_ID
> Nếu chúng ta đang đứng ngoài một container đang chạy và muốn container này dừng lại. Thì ta sử dụng lệnh trên với **NAME** hoặc với **CONTAINER_ID** tương ứng.

##### 14. docker rm CONTAINER_ID || NAME 
> Để xóa một container không còn muốn sử dụng nữa trong trạng thái không hoạt động.

##### 15. docker rm -f CONTAINER_ID || NAME
> Để xóa một container không còn muốn sử dụng trong trạng thái vẫn còn đang hoạt động.

##### 16. docker exec CONTAINER_ID || NAME  command
> Khi chúng ta đứng bên ngoài một container mà vẫn muốn container đó thực một lệnh nào đó, thì chúng ta sử dụng lệnh trên.<br/>
> Trong đó command là lệnh mà chúng ta muốn thực thi.

##### 17. docker commit CONTAINER_ID || NAME NEW_NAME_IMAGE:NEW_TAG
> Để đưa một container về thành một image chúng ta sử dụng lệnh trên. Lưu ý, container lúc này phải đang ở trạng thái dừng. <br/>
> Trong đó: <br/>
> **NEW_NAME_IMAGE**: Là tên muốn đặt cho container sau khi chuyển thành image. <br/>
> **NEW_TAG**: Là version hay tag chúng ta muốn set cho container này sau khi chuyển thành image.

##### 18. docker save --output NEW_NAME_IMAGE.tar IMAGE_ID || NAME
> Để lưu một image ra thành file để tái sử dụng trên một docker ở máy khác chúng ta sử dụng lệnh trên.

##### 19. docker load -i FILE_NAME_IMAGE.tar
> Để thực hiện khôi phục một image từ một file nào đó.

##### 20. docker tag IMAGE_ID NEW_NAME_IMAGE:NEW_TAG
> Nếu khi load một image mới mà quên đặt tên cho image thì chúng ta sử dụng lệnh này để đặt tên mới cho image.

##### 21. docker run -it -v HOST_PATH:CONTAINER_PATH IMAGE_ID
> Trong đó: <br/>
**HOST_PATH** là đường dẫn tại máy host của thư mục hoặc file bạn muốn chia sẻ dữ liệu. <br/>
**CONTAINER_PATH** là đường dẫn bạn muốn thư mục chia sẻ theo HOST_PATH sẽ hiển thị tại CONTAINER.
**IMAGE_ID** là id của image.

##### 22. docker run -it --volumes-from  OtherContainer IMAGE_ID
> Với lệnh này sẽ giúp các container có thể sử dụng chung dữ liệu host giữa các container. <br/>
> Trong đó: <br/>
**OtherContainer** là container mà bạn muốn container mới này sử dụng chung dữ liệu được máy host cấp phép.

##### 23. docker volume ls
> Xem danh sách các ổ đĩa được cấp phép cho docker.

##### 24. docker volume create VOLUME_NAME
> Tạo một ổ đĩa mới và gán vào một container, khi container xóa thì ổ đĩa này vẫn tồn tại, ngoại trừ trường hợp cố tình xóa ổ đĩa trước khi xóa container.<br/>
> Trong đó: **VOLUME_NAME** là tên muốn set cho volume này.

##### 25. docker volume inspect  VOLUME_NAME
> Để check thông tin của một ổ đĩa ta sử dụng lệnh trên. Lệnh trên sẽ có kết quả như sau: <br/>
> [ <br/>
{
    "CreatedAt": "2023-02-19T06:28:04Z",<br/>
    "Driver": "local",<br/>
    "Labels": {},<br/>
    "Mountpoint": "/var/lib/docker/volumes/D1/_data",<br/>
    "Name": "D1",<br/>
    "Options": {},<br/>
    "Scope": "local"<br/>
    }<br/>
]<br/>

##### 26. docker volume rm VOLUME_NAME
> Để thực hiện remove một ổ đĩa.

##### 27. docker run -it --name NAME_CONTAINER --mount source=VOLUME_NAME,target=PATH_CONTAINER ID_IMAGE
> Để cấp phép một container sử dụng một ổ đĩa nào đó.
> Trong đó: <br/>
> **NAME_CONTAINER** là tên muốn đặt cho container khi thực thi.<br/>
> **VOLUME_NAME** là tên của ổ đĩa hay volume hay disk muốn cấp phép. <br/>
> **PATH_CONTAINER** là đường dẫn sau khi ổ đĩa ánh xạ lênh trên container

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


