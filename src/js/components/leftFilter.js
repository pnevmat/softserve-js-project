export function leftFilter(option) {
  const linksArr = option.options.map(link => {
    return `
			<li>
				<span>${link.name}</span>
				<span>(${link.quantity})</span>
			</li>
		`;
  });

  return `
    <li>
      <h3>${option.name}</h3>
      <ul>
				${linksArr.join('')}
			</ul>
    </li>
	`;
}
