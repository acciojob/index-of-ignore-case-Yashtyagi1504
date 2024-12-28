function indexOfIgnoreCase(s1, s2) {
  // write your code here
	for(let i = 0; i<s1.length;i++){
		let substr =""
		for(let j = i;j<s1.length;j++){
			substr += s1[j]
			if(substr==s2){
				return i
			}
		}
	}
	return -1
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
