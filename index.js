const click = document.querySelectorAll('.click');
const on = document.querySelectorAll('.on');
click.forEach((show) =>
{
	show.addEventListener('click', () => 
	{
		if (show.nextElementSibling.classList.contains("off"))
		{
			click.forEach((show1) => 
			{
				show1.querySelector('.arrow').style.transform = "rotate(360deg)";
				show1.nextElementSibling.classList.add("off");
				show1.style.fontWeight = "";
				show1.style.color = "";
			})
			show.querySelector('.arrow').style.transform = "rotate(180deg)";
			show.nextElementSibling.classList.remove("off");
			show.style.fontWeight = "700";
			show.style.color = "var(--Very-dark-saturated-blue)";
		}
		else
		{
			show.querySelector('.arrow').style.transform = "rotate(360deg)";
			show.nextElementSibling.classList.add("off");
			show.style.fontWeight = "";
			show.style.color = "";
		}
	})
})