import { header } from '../components/header.js';
import { footer } from '../components/footer.js';

export function shippingAndDeliveryQuestionsPage({ page, baseUrlFolder }) {
  return `
		${header(page, baseUrlFolder)}
		<section class="shipping_questions">
        <h1 class="shipping_questions_title">
          Shipping and Delivery Questions
        </h1>
        <ol class="shipping_questions_links_list" id="faq-list">
          <li>
            <a class="shipping_questions_link" href="#shipping-order-charges">
              What does 6pm.com charge for shipping an order?
            </a>
          </li>
          <li>
            <a class="shipping_questions_link" href="#receive-order-time">
              How long will it be before I receive my order?
            </a>
          </li>
          <li>
            <a class="shipping_questions_link" href="#ship-outside-us">
              Do you ship to addresses outside the United States?
            </a>
          </li>
          <li>
            <a
              class="shipping_questions_link"
              href="#po-box-military-addresses"
            >
              Do you ship to PO boxes or Military APO/FPO addresses?
            </a>
          </li>
          <li>
            <a class="shipping_questions_link" href="#expedite-shipping">
              Can I expedite my shipping?
            </a>
          </li>
          <li>
            <a class="shipping_questions_link" href="#contact-us">
              How can I contact 6pm.com for additional assistance?
            </a>
          </li>
          <li>
            <a class="shipping_questions_link" href="#return-policy">
              What is 6pm.com's Return Policy?
            </a>
          </li>
          <li>
            <a class="shipping_questions_link" href="#guaranteed-shipping">
              Are the shipping time-frames listed on your website guaranteed?
            </a>
          </li>
        </ol>
        <ul class="shipping_answers_list">
          <li class="shipping_answers_list_item" id="shipping-order-charges">
            <ul>
              <li class="shipping_answers_list_item_question">
                <span class="shipping_answers_list_item_question_marker"
                  >Q:</span
                >
                <h4 class="shipping_answers_list_item_question_title">
                  What does 6pm.com charge for shipping an order?
                </h4>
              </li>
              <li class="shipping_answers_list_item_answer">
                <span class="shipping_answers_list_item_answer_marker">A:</span>
                <ul>
                  <li class="shipping_answers_list_item_answer_text">
                    Spend $100 or more, before tax, for Free Standard Shipping
                    (4-5 Business Days).* If you do not meet this requirement,
                    Standard Shipping is $3.95.
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    In a hurry? See the checkout for expected delivery dates on
                    options below:
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    Fast: $3.95**
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    Faster $9.99
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    Fastest $14.99
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    *Free Standard Shipping (4-5 Business Days) is automatically
                    applied to orders totaling $100 or more before tax, before
                    gift card (if applicable) and after coupon is used (if
                    applicable).
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    ** Shipping speeds are based on carrier transit times and do
                    not include the time it takes to handle and pack a shipment.
                    All expected delivery dates are provided at the checkout
                    page. However, due to payment type, and that company's
                    approval procedures, there could be a delay in shipping your
                    order if the billing information is inaccurate, or if your
                    billing and shipping addresses are different. Expedited
                    shipping is not available for shipments to Hawaii, Alaska,
                    U.S. Territories, PO Boxes, or APO/FPO addresses. Please
                    allow additional time for orders shipped to these addresses.
                    Expedited shipping is also not available for shipments
                    including items containing hazardous material by the
                    Department of Transportation which may be some watches due
                    to the batteries they contain.
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="shipping_answers_list_item_return_link"
                  href="#faq-list"
                >
                  Return to Top
                </a>
              </li>
            </ul>
          </li>
          <li class="shipping_answers_list_item" id="receive-order-time">
            <ul>
              <li class="shipping_answers_list_item_question">
                <span class="shipping_answers_list_item_question_marker"
                  >Q:</span
                >
                <h4 class="shipping_answers_list_item_question_title">
                  How long will it be before I receive my order?
                </h4>
              </li>
              <li class="shipping_answers_list_item_answer">
                <span class="shipping_answers_list_item_answer_marker">A:</span>
                <ul>
                  <li class="shipping_answers_list_item_answer_text">
                    For standard shipping, you should receive your order within
                    4-5 business days.
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    Please allow additional time for shipments to PO Boxes and
                    military addresses (APO, FPO).
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="shipping_answers_list_item_return_link"
                  href="#faq-list"
                >
                  Return to Top
                </a>
              </li>
            </ul>
          </li>
          <li class="shipping_answers_list_item" id="ship-outside-us">
            <ul>
              <li class="shipping_answers_list_item_question">
                <span class="shipping_answers_list_item_question_marker"
                  >Q:</span
                >
                <h4 class="shipping_answers_list_item_question_title">
                  Do you ship to addresses outside the United States?
                </h4>
              </li>
              <li class="shipping_answers_list_item_answer">
                <span class="shipping_answers_list_item_answer_marker">A:</span>
                <ul>
                  <li class="shipping_answers_list_item_answer_text">
                    At this time orders may only be shipped to US States and
                    Territories. Please keep in mind that using third-party
                    shipping services is at your own risk.
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="shipping_answers_list_item_return_link"
                  href="#faq-list"
                >
                  Return to Top
                </a>
              </li>
            </ul>
          </li>
          <li class="shipping_answers_list_item" id="po-box-military-addresses">
            <ul>
              <li class="shipping_answers_list_item_question">
                <span class="shipping_answers_list_item_question_marker"
                  >Q:</span
                >
                <h4 class="shipping_answers_list_item_question_title">
                  Do you ship to PO boxes or Military APO/FPO addresses?
                </h4>
              </li>
              <li class="shipping_answers_list_item_answer">
                <span class="shipping_answers_list_item_answer_marker">A:</span>
                <ul>
                  <li class="shipping_answers_list_item_answer_text">
                    Shipments can be sent to both PO Boxes and Military APO/FPO
                    addresses. Please allow additional time for orders shipped
                    to these addresses.* Expedited shipping is not available to
                    these address types.
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="shipping_answers_list_item_return_link"
                  href="#faq-list"
                >
                  Return to Top
                </a>
              </li>
            </ul>
          </li>
          <li class="shipping_answers_list_item" id="expedite-shipping">
            <ul>
              <li class="shipping_answers_list_item_question">
                <span class="shipping_answers_list_item_question_marker"
                  >Q:</span
                >
                <h4 class="shipping_answers_list_item_question_title">
                  Can I expedite my shipping?
                </h4>
              </li>
              <li class="shipping_answers_list_item_answer">
                <span class="shipping_answers_list_item_answer_marker">A:</span>
                <ul>
                  <li class="shipping_answers_list_item_answer_text">
                    The following shipping options are available when you check
                    out.
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    Spend $100 or more, before tax, for Free Standard Shipping
                    (4-5 Business Days)!* If you do not meet those requirements,
                    Standard Shipping is $3.95.
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    In a hurry? See the checkout for expected delivery dates on
                    options below:
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    Fast: $3.95**
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    Faster $9.99
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    Fastest $14.99
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    *Free Standard Shipping (4-5 Business Days) is automatically
                    applied to orders totaling $100 or more before tax, before
                    gift card (if applicable) and after coupon is used (if
                    applicable).
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    **Shipping speeds are based on carrier transit times and do
                    not include the time it takes to handle and pack a shipment.
                    All expected delivery dates are provided at the checkout
                    page. However, due to payment type, and that company's
                    approval procedures, there could be a delay in shipping your
                    order if the billing information is inaccurate, or if your
                    billing and shipping addresses are different. Expedited
                    shipping is not available for shipments to Hawaii, Alaska,
                    U.S. Territories, PO Boxes, or APO/FPO addresses. Please
                    allow additional time for orders shipped to these addresses.
                    Expedited shipping is also not available for shipments
                    including items containing hazardous material by the
                    Department of Transportation which may be some watches due
                    to the batteries they contain.
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="shipping_answers_list_item_return_link"
                  href="#faq-list"
                >
                  Return to Top
                </a>
              </li>
            </ul>
          </li>
          <li class="shipping_answers_list_item" id="contact-us">
            <ul>
              <li class="shipping_answers_list_item_question">
                <span class="shipping_answers_list_item_question_marker"
                  >Q:</span
                >
                <h4 class="shipping_answers_list_item_question_title">
                  How can I contact 6pm.com for additional assistance?
                </h4>
              </li>
              <li class="shipping_answers_list_item_answer">
                <span class="shipping_answers_list_item_answer_marker">A:</span>
                <ul>
                  <li class="shipping_answers_list_item_answer_text">
                    If you need help with your order please feel free to email
                    us at: cs@6pm.com or call our Customer Loyalty Team at
                    1.888.676.2660.
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="shipping_answers_list_item_return_link"
                  href="#faq-list"
                >
                  Return to Top
                </a>
              </li>
            </ul>
          </li>
          <li class="shipping_answers_list_item" id="return-policy">
            <ul>
              <li class="shipping_answers_list_item_question">
                <span class="shipping_answers_list_item_question_marker"
                  >Q:</span
                >
                <h4 class="shipping_answers_list_item_question_title">
                  What is 6pm.com's Return Policy?
                </h4>
              </li>
              <li class="shipping_answers_list_item_answer">
                <span class="shipping_answers_list_item_answer_marker">A:</span>
                <ul>
                  <li class="shipping_answers_list_item_answer_text">
                    We're glad you asked! See our Returns Section here:
                    http://www.6pm.com/return-questions to see the entire
                    policy.
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="shipping_answers_list_item_return_link"
                  href="#faq-list"
                >
                  Return to Top
                </a>
              </li>
            </ul>
          </li>
          <li class="shipping_answers_list_item" id="guaranteed-shipping">
            <ul>
              <li class="shipping_answers_list_item_question">
                <span class="shipping_answers_list_item_question_marker"
                  >Q:</span
                >
                <h4 class="shipping_answers_list_item_question_title">
                  Are the shipping time-frames listed on your website
                  guaranteed?
                </h4>
              </li>
              <li class="shipping_answers_list_item_answer">
                <span class="shipping_answers_list_item_answer_marker">A:</span>
                <ul>
                  <li class="shipping_answers_list_item_answer_text">
                    Yes. 6pm.com strives to fulfill all of the orders that we
                    process within the quoted time-frames 6pm gladly stands
                    behind the quoted delivery time-frames associated with each
                    of the shipping types that we offer.
                  </li>
                  <li class="shipping_answers_list_item_answer_text">
                    6pm.com accepts no responsibility for packages that do not
                    arrive within a stated time-frame due to extreme weather
                    conditions or a force majeure
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="shipping_answers_list_item_return_link"
                  href="#faq-list"
                >
                  Return to Top
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
			${footer()}
	`;
}
