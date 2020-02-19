$(function(){
    console.log("hello")
})
function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  }
$(function () { 
    //得到dom元素
    var $width=$('#width');
    $height=$("#height");
    $btnCal=$("#calculate");
    $perimeter=$("#perimeter");
    $area=$("#area");
    //点击事件
    $btnCal.click(function () { 
        //获得值
        var w=Number($width.val());
        var h=Number($height.val());

        //计算
        console.log(1)
        var p=roundFractional(2*(w+h),10);
        var a=roundFractional((w*h),10)
        console.log(2)
        console.log(p)
        //输出
        $perimeter.val(p);
        $area.val(a);
     })
 })