// <!-- this is for mobile  -->
// <!-- start page  -->
function customfield() {
    document.getElementById("form_section").style.display = "block";
}
function back() {
    document.getElementById("form_section").style.display = "none";
}
function adddescriptionmob() {
    document.getElementById("Remove_descriptionmob").style.display = "flex";
    document.getElementById("add_desmob").style.display = "none";
    document.getElementById('add_description').style.display = 'block';
}
function removedescriptionmob() {
    document.getElementById("Remove_descriptionmob").style.display = "none";
    document.getElementById("add_desmob").style.display = "flex";
    document.getElementById('add_description').style.display = 'none';
}
function addpaymentmob() {
    document.getElementById("remove_payment_mob").style.display = "flex";
    document.getElementById("add_payment_mob").style.display = "none";
    document.getElementById('payment_descriptionmob').style.display = 'block';
}
function removepaymentmob() {
    document.getElementById("remove_payment_mob").style.display = "none";
    document.getElementById("add_payment_mob").style.display = "flex";
    document.getElementById('payment_descriptionmob').style.display = 'none';
}
function downclick() {
    document.getElementById('invoice_list').style.display = 'block';
    document.getElementById('upclick_button').style.display = 'block';
    document.getElementById('downclick_button').style.display = 'none';
}
function upclick() {
    document.getElementById('invoice_list').style.display = 'none';
    document.getElementById('upclick_button').style.display = 'none';
    document.getElementById('downclick_button').style.display = 'block';
}
// <!-- this is for mobile  -->
// <!-- end mobile_page-->

// <!-- middle area start  -->

// <!-- first_sectionstart -->
// <!-- first_part start -->
let profilepic = document.getElementById('profilepic');
let inputfile = document.getElementById('logo');
inputfile.onchange = function () {
    profilepic.src = URL.createObjectURL(inputfile.files[0]);
}
function inputfil() {
    document.getElementById('profile').style.display = 'flex';
    document.getElementById('usergallery').style.display = 'none';
}
function profile() {
    document.getElementById('profile').style.display = 'none';
    document.getElementById('usergallery').style.display = 'block';
}
// <!-- first_part_end -->
// <!-- first_sectionend-->
// <!-- fiveth_section_start  -->
function customize() {
    document.getElementById('product1').style.display = 'none';
    document.getElementById('course1').style.display = 'block';
}
function customize1() {
    document.getElementById('product2').style.display = 'none';
    document.getElementById('course2').style.display = 'block';

}
function customize2() {
    document.getElementById('product3').style.display = 'none';
    document.getElementById('course3').style.display = 'block';

}
function customize3() {
    document.getElementById('product4').style.display = 'none';
    document.getElementById('course4').style.display = 'block';

}
function removesection1() {
    document.getElementById('course1').style.display = 'none';
}
function removesection2() {
    document.getElementById('course2').style.display = 'none';
}
function removesection3() {
    document.getElementById('course3').style.display = 'none';
}
function removesection4() {
    document.getElementById('course4').style.display = 'none';
}
function totalvalue1() {
    let x = document.getElementById("first1").value;
    let y = document.getElementById("second1").value;
    let z = (x) * (y);
    document.getElementById("total_value1").innerText = z;
}
function totalvalue2() {
    let x = document.getElementById("first2").value;
    let y = document.getElementById("second2").value;
    let z = (x) * (y);
    document.getElementById("total_value2").innerText = z;
}
function totalvalue3() {
    let x = document.getElementById("first3").value;
    let y = document.getElementById("second3").value;
    let z = (x) * (y);
    document.getElementById("total_value3").innerText = z;
}
function totalvalue4() {
    let x = document.getElementById("first4").value;
    let y = document.getElementById("second4").value;
    let z = (x) * (y);
    document.getElementById("total_value4").innerText = z;
}
function totalvalue5() {
    let x = document.getElementById("first5").value;
    let y = document.getElementById("second5").value;
    let z = (x) * (y);
    document.getElementById("total_value5").innerText = z;
}
function collect_data1(){
    document.getElementById('course1').style.display = 'none';
    document.getElementById('product1').style.display = 'flex';
    let x = document.getElementById("first1").value;
    let y = document.getElementById("second1").value;
    let z = (x) * (y);
    document.getElementById("quantity1").innerText = x;
    document.getElementById("price1").innerText = y;
    document.getElementById("total1").innerText = z;
}
function collect_data2(){
    document.getElementById('course2').style.display = 'none';
    document.getElementById('product2').style.display = 'flex';
    let x = document.getElementById("first2").value;
    let y = document.getElementById("second2").value;
    let z = (x) * (y);
    document.getElementById("quantity2").innerText = x;
    document.getElementById("price2").innerText = y;
    document.getElementById("total2").innerText = z;
}
function collect_data3(){
    document.getElementById('course3').style.display = 'none';
    document.getElementById('product3').style.display = 'flex';
    let x = document.getElementById("first3").value;
    let y = document.getElementById("second3").value;
    let z = (x) * (y);
    document.getElementById("quantity3").innerText = x;
    document.getElementById("price3").innerText = y;
    document.getElementById("total3").innerText = z;
}
function collect_data4(){
    document.getElementById('course4').style.display = 'none';
    document.getElementById('product4').style.display = 'flex';
    let x = document.getElementById("first4").value;
    let y = document.getElementById("second4").value;
    let z = (x) * (y);
    document.getElementById("quantity4").innerText = x;
    document.getElementById("price4").innerText = y;
    document.getElementById("total4").innerText = z;
}
// <!-- fiveth_section_end -->
function invoice_item() {
    document.getElementById('course5').style.display = 'block';
}
function removesection5() {
    document.getElementById('course5').style.display = 'none';
}
// <!-- middle area end  -->
// <!-- sidebar_area_start -->

function customfield() {
    document.getElementById("form_section").style.display = "block";
}
function back() {
    document.getElementById("form_section").style.display = "none";
}
function addcompany() {
    document.getElementById('add_company').style.display = 'block';
}
function addclient() {
    document.getElementById('add_client').style.display = 'block'
}
function adddescription() {
    document.getElementById('add_description').style.display = 'block';
    document.getElementById('Remove_description').style.display = 'flex';
    document.getElementById('add_des').style.display = 'none';
}
function removedescription() {
    document.getElementById('add_description').style.display = 'none';
    document.getElementById('Remove_description').style.display = 'none';
    document.getElementById('add_des').style.display = 'flex';
}
function addpayment() {
    document.getElementById('payment_description').style.display = 'block';
    document.getElementById('remove_payment').style.display = 'flex';
    document.getElementById('Add_payment').style.display = 'none';
}
function removepayment() {
    document.getElementById('payment_description').style.display = 'none';
    document.getElementById('remove_payment').style.display = 'none';
    document.getElementById('Add_payment').style.display = 'flex';
}
// <!-- sidebar_area_end -->

