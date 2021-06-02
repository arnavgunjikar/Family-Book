var images = ["https://i.postimg.cc/c4T579J2/20210317-171134.jpg","https://i.postimg.cc/GpTVpM2s/91-98236-37730-20200720-110237.jpg","https://i.postimg.cc/mZ1b599m/20210601-173607.jpg","https://i.postimg.cc/wj2HmQKj/FB-IMG-1606989511470.jpg","https://i.postimg.cc/kgpLqrnm/20210602-081635.jpg","https://i.postimg.cc/cLHPp1Gh/20210602-081725.jpg"];
var names = ["Family Photo","Arnav Gunjikar_son","Rahul Gunjikar_Father", "Seema Gunjikar_Mother", "Gurupad Parsi_Grandfather","Kamala Parsi_Grandmother"];
var i = 0;
function update()
{
i++;
var numbers_of_family_member_in_array = 5
if(i > numbers_of_family_member_in_array )
{
i = 0;
}
var updatedImage = images[i];
var updatedName  = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
}