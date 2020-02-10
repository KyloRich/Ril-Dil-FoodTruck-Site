import React from "react";

const About = () => (
  <React.Fragment>
    <header className="page-header">
      <h1 className="text-white col-lg-9 my-5">
        <i className="fas fa-fire"></i>THE RIL-DIL HISTORY
      </h1>
    </header>
    <div className="container">
      <div className="row p-5">
        <div className="col-lg-9 text-left text-white-50">
          <p>
            Ril Dil barbecue sauce was developed by Great Uncle Jed back in the
            early 1930's. Uncle Jed grew up on a farm in Kansas, and you know
            how country folk feel about their cookin'. Uncle Jed was a teenager
            during the Dust Bowl. This was a period of time when crops were
            destroyed, and land became unfarmable. Great Uncle Jed knew that he
            couldn't fall into the family business when he saw the way the Dust
            Bowl ruined his families livlihood for six years. He got the idea to
            start selling his home-made barbecue sauce after all his friends and
            family told him how good it was when he cooked for them. So he go
            the idea to start selling Ril Dil BBQ sauce in 1938.
          </p>
          <p>
            His business quickly grew through the Midwestern United States. By
            the 1950's his sauces were on store shelves from coast to coast. In
            the 1978, after running the family business for 30 years, Great
            Uncle Jed handed the reins to Uncle Ned. Uncle Ned oversaw a period
            of Great growth for the company, and by the 1990's there were nearly
            twenty food carts offering a range of barbecue foods featuring the
            full array of Ril Dil BBQ sauces. The sauce list also saw expansion
            during this time. Ril Dil Mesquite, Ril Dil Spicy Mango, and Ril Dil
            Pic'ld flavors emerged, but by the late 2000's the company
            experienced a decline with the economy.
          </p>
          <p>
            All food carts were shut down, and sauce sales declined even more
            rapidly than housing prices. Today the company has rebounded with
            the market. Just like houses, our meats and sauces are over priced
            and being bought up faster than they can be produced. Uncle Ned has
            blown the company back up into a respectable one truck fleet food
            truck business with several local shops still allowing our sauces to
            collect dust on the shelves. So why not come down to our current
            location and see how wonderful our mediocre food and high prices can
            make you feel!
          </p>
        </div>
        <div className="col-lg-3 rildil-reviews">
          <h3 className="text-danger">Reviews</h3>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card">
                  <div className="card-body">
                    <blockquote className="blockquote">
                      <p>
                        Ril Dil is the real deal. They are hands down the best
                        food truck in Phoenix!
                      </p>
                      <footer className="blockquote-footer">Johnny Cash</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                  <div className="card-body">
                    <blockquote className="blockquote">
                      <p>
                        These guys don't know what they're doing. They are the
                        worst food truck I have ever eaten at!
                      </p>
                      <footer className="blockquote-footer">
                        Vivian Liberto{" "}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                  <div className="card-body">
                    <blockquote className="blockquote">
                      <p>Whew! That is some good BBQ sauce.</p>
                      <footer className="blockquote-footer">
                        Devin Hester{" "}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default About;
