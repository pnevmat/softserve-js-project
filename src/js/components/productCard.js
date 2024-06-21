export function productCard(product) {
  return `
		<li>
			<a href="">
				<div>
					<div>
						<button></button>
					</div>
					<div>
						<img src="${product.img}" />
					</div>
				</div>
				<div>
					<span>${product.brand}</span>
					<span>${product.name}</span>
					<span>${product.price}</span>
				</div>
			</a>
		</li>
	`;
}
