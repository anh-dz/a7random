var a7name=['NGUYỄN CÔNG THÀNH AN', 'HOÀNG MAI ANH', 'NGUYỄN DUY ANH', 'NGUYỄN MAI NHẬT ANH', 'NGUYỄN PHƯƠNG ANH', 'NGUYỄN PHƯƠNG ANH', 'NGUYỄN QUANG ANH', 'TRƯƠNG NGỌC ÁNH', 'BÙI ĐỨC BẰNG', 'TRẦN ĐÔNG BÌNH', 'PHẠM CHÍ CƯƠNG', 'VŨ MẠNH CƯỜNG', 'LÊ VĂN DŨNG', 'NGUYỄN ĐỨC DUY', 'LÊ ANH DƯƠNG', 'ĐÀO TIẾN ĐẠT', 'NGUYỄN HƯƠNG GIANG', 'VŨ THỊ THANH HIỀN', 'NGUYỄN THÁI HIỂN', 'DƯƠNG CÔNG HUY', 'NGUYỄN NHẬT HUY', 'NGUYỄN QUỐC HUY', 'PHẠM QUỐC HUY', 'KHÚC NAM KHÁNH', 'NGÔ NAM KHÁNH', 'NGUYỄN GIA KHIÊM', 'NGUYỄN ĐĂNG KHÔI', 'NGUYỄN KHÁNH LINH', 'NGUYỄN HƯƠNG LY', 'NGUYỄN KHÁNH LY', 'ĐẶNG TIẾN MẠNH', 'ĐINH TUẤN MINH', 'NGUYỄN ĐỨC MINH', 'NGUYỄN THỊ KIM NGÂN', 'HOÀNG HỮU NGHĨA', 'LÊ PHƯƠNG NHUNG', 'VĂN ĐỨC QUÂN', 'NGUYỄN MINH SƠN', 'NGUYỄN HUY THÀNH', 'NGUYỄN PHƯƠNG THẢO', 'HOÀNG ĐỨC THẮNG', 'TRẦN ĐOAN TRANG', 'LÊ VĂN TRUNG', 'NGUYỄN NAM LINH']
var indexOld
var index=Math.floor((Math.random()*a7name.length))
var password=a7name[index]
var characters=[]
var counter=0
var interval=setInterval(function(){
  for(i=0;i<counter;i++){
    characters[i]=password.charAt(i)
  }
  for(i=counter;i<password.length;i++){
    characters[i]=Math.random().toString(36).charAt(2)
  }
  $('.password').text(characters.join(''))
},25)
function hack(){
  counter++
  if(counter==password.length){
    $('.granted, .rerun').removeClass('hidden')
  }
}
$(window).on('keydown',hack)
$('.password').on('click',hack)
$('.rerun').on('click',function(){
  indexOld=index
  do{
    index=Math.floor((Math.random()*a7name.length))
  }
  while(index==indexOld)
  $('.granted, .rerun').addClass('hidden')
  password=a7name[index]
  characters=[]
  counter=0
})
  $('.start').on('click',function(){
    $(this).addClass('hidden')
    $('.info p:last-child, .password').removeClass('hidden')
})