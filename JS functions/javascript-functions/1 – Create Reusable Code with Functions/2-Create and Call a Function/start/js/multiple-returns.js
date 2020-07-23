function isFieldEmpty ()   {
	const field = document.querySelector('#info');

	if (!field.value) {
		return true;
	} else{
		return false;
	}
}

const fielTest = isFieldEmpty();

if (fielTest)
{
	alert('please provide your information');
}