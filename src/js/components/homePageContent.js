export function homePageContent() {
  return `
		<main class="home_page">
        <h1 class="home_page_main_title">6pm Homepage</h1>
        <article>
          <a href="" class="summer_link">
            <picture>
              <img
                src="./src/images/summer.webp"
                srcset="
                  ./src/images/summer1x.webp 1x,
                  ./src/images/summer2x.webp 2x
                "
                alt=""
              />
            </picture>
            <div class="summer_text_container">
              <h2 class="summer_subtitle">Summer Style Highlights</h2>
              <p class="summer_text">
                Sandals, sneakers, sundresses and more for the new season!
              </p>
              <p class="summer_text_brown">UP TO 70% OFF MSRP!</p>
              <button class="summer_text_btn">Shop Summer & More</button>
            </div>
          </a>
        </article>

        <section class="sale">
          <article class="sale_category">
            <a class="sale_link" href="">
              <picture>
                <img
                  src="./src/images/sandals.webp"
                  srcset="./src/images/sandals1x.webp 1x"
                  alt=""
                />
              </picture>
              <p class="sale_category_name">
                <span>Shop Sandals on Sale</span>
              </p>
            </a>
          </article>
          <article class="sale_category">
            <a class="sale_link" href="">
              <picture>
                <img
                  src="./src/images/dresses.webp"
                  srcset="./src/images/dresses1x.webp"
                  alt=""
                />
              </picture>
              <p class="sale_category_name">
                <span>Shop Dresses on Sale</span>
              </p>
            </a>
          </article>
          <article class="sale_category">
            <a class="sale_link" href="">
              <picture>
                <img
                  src="./src/images/sneakers.webp"
                  alt="./src/images/sneakers1x.webp 1x"
                />
              </picture>
              <p class="sale_category_name">
                <span>Shop Sneakers on Sale</span>
              </p>
            </a>
          </article>
        </section>
      </main>
	`;
}
