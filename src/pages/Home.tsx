import {
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonChip,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { bagHandleOutline, cartOutline, heartOutline, personCircleOutline, searchOutline, star } from "ionicons/icons";

const products = [
  { id: 1, name: "Minimal Sneakers", category: "Footwear", price: "$89", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80" },
  { id: 2, name: "Classic Watch", category: "Accessories", price: "$129", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80" },
  { id: 3, name: "Premium Backpack", category: "Bags", price: "$74", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80" },
];

const categories = ["Men", "Women", "Accessories", "Lifestyle"];

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            <div className="flex items-center gap-2">
              <IonIcon icon={bagHandleOutline} className="text-2xl text-indigo-600" />
              <span className="font-black text-indigo-600">NovaShop</span>
            </div>
          </IonTitle>

          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={searchOutline} />
            </IonButton>

            <IonButton className="relative">
              <IonIcon slot="icon-only" icon={cartOutline} />

              <IonBadge color="danger" className="absolute -right-1 -top-1">
                3
              </IonBadge>
            </IonButton>

            <IonButton>
              <IonIcon slot="icon-only" icon={personCircleOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="min-h-full bg-slate-50">
          {/* HERO */}
          <section className="px-4 py-8 md:px-8 lg:px-12">
            <IonGrid fixed>
              <IonRow className="items-center">
                <IonCol size="12" sizeMd="6">
                  <div className="pr-0 md:pr-8">
                    <IonChip color="primary">New Collection 2026</IonChip>

                    <h1 className="mt-4 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
                      Style that fits
                      <span className="block text-indigo-600">your everyday.</span>
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                      Discover modern everyday essentials, premium accessories, and timeless pieces curated for comfort and style.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <IonButton>Shop Now</IonButton>

                      <IonButton fill="outline" color="medium">
                        Explore Collection
                      </IonButton>
                    </div>

                    <IonGrid className="mt-6 p-0">
                      <IonRow>
                        <IonCol size="4">
                          <div>
                            <p className="text-2xl font-black text-slate-900">15K+</p>
                            <p className="text-xs text-slate-500">Customers</p>
                          </div>
                        </IonCol>

                        <IonCol size="4">
                          <div>
                            <p className="text-2xl font-black text-slate-900">4.9</p>
                            <p className="text-xs text-slate-500">Rating</p>
                          </div>
                        </IonCol>

                        <IonCol size="4">
                          <div>
                            <p className="text-2xl font-black text-slate-900">120+</p>
                            <p className="text-xs text-slate-500">Products</p>
                          </div>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </div>
                </IonCol>

                <IonCol size="12" sizeMd="6">
                  <div className="relative mt-8 md:mt-0">
                    <div className="absolute inset-0 rounded-[2rem] bg-indigo-200 blur-3xl" />

                    <img
                      src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80"
                      alt="Fashion collection"
                      className="relative h-[420px] w-full rounded-[2rem] object-cover shadow-xl md:h-[520px]"
                    />

                    <IonCard className="absolute bottom-4 left-4 m-0 rounded-2xl shadow-lg">
                      <IonCardContent>
                        <p className="text-xs text-slate-500">Limited Offer</p>
                        <p className="text-xl font-black text-indigo-600">Up to 40% Off</p>
                      </IonCardContent>
                    </IonCard>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </section>

          {/* SEARCH */}
          <section className="px-4 md:px-8 lg:px-12">
            <IonGrid fixed>
              <IonRow>
                <IonCol size="12">
                  <IonSearchbar placeholder="Search products..." className="rounded-2xl" />
                </IonCol>
              </IonRow>
            </IonGrid>
          </section>

          {/* CATEGORIES */}
          <section className="bg-white px-4 py-12 md:px-8 lg:px-12">
            <IonGrid fixed>
              <IonRow>
                <IonCol size="12">
                  <div className="mb-6">
                    <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">Browse</p>

                    <h2 className="text-3xl font-black text-slate-900">Shop by Category</h2>
                  </div>
                </IonCol>
              </IonRow>

              <IonRow>
                {categories.map((category) => (
                  <IonCol key={category} size="12" sizeSm="6" sizeLg="3">
                    <IonCard className="h-full rounded-2xl shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                      <IonCardContent>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                          <IonIcon icon={bagHandleOutline} className="text-2xl text-indigo-600" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900">{category}</h3>

                        <p className="mt-2 text-sm text-slate-500">Explore premium {category.toLowerCase()} products.</p>

                        <IonButton fill="clear" className="mt-3 px-0 normal-case">
                          Browse
                        </IonButton>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </section>

          {/* FEATURED PRODUCTS */}
          <section className="px-4 py-12 md:px-8 lg:px-12">
            <IonGrid fixed>
              <IonRow>
                <IonCol size="12">
                  <div className="mb-6">
                    <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">Popular Picks</p>

                    <h2 className="text-3xl font-black text-slate-900">Featured Products</h2>
                  </div>
                </IonCol>
              </IonRow>

              <IonRow>
                {products.map((product) => (
                  <IonCol key={product.id} size="12" sizeMd="6" sizeLg="4">
                    <IonCard className="overflow-hidden rounded-2xl shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                      <div className="relative">
                        <img src={product.image} alt={product.name} className="h-72 w-full object-cover" />

                        <IonButton fill="solid" color="light" shape="round" className="absolute right-3 top-3">
                          <IonIcon slot="icon-only" icon={heartOutline} />
                        </IonButton>
                      </div>

                      <IonCardContent>
                        <IonChip color="primary">{product.category}</IonChip>

                        <div className="mt-3 flex items-start justify-between gap-4">
                          <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>

                          <p className="text-xl font-black text-slate-900">{product.price}</p>
                        </div>

                        <div className="mt-3 flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <IonIcon key={index} icon={star} className="text-amber-400" />
                          ))}

                          <span className="ml-2 text-sm text-slate-500">4.9</span>
                        </div>

                        <IonButton expand="block" className="mt-5 normal-case">
                          <IonIcon slot="start" icon={cartOutline} />
                          Add to Cart
                        </IonButton>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </section>

          {/* CTA */}
          <section className="px-4 py-12 md:px-8 lg:px-12">
            <IonGrid fixed>
              <IonRow>
                <IonCol size="12">
                  <IonCard className="rounded-[2rem] bg-indigo-600 shadow-none">
                    <IonCardContent className="py-12 text-center text-white">
                      <h2 className="text-3xl font-black md:text-4xl">Get 20% off your first order</h2>

                      <p className="mx-auto mt-3 max-w-xl text-indigo-100">Subscribe and be the first to know about new products and exclusive offers.</p>

                      <div className="mx-auto mt-6 max-w-xl">
                        <IonSearchbar placeholder="Enter your email" className="bg-transparent" />

                        <IonButton color="dark" className="mt-2 normal-case">
                          Subscribe
                        </IonButton>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </section>
        </div>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <div className="flex flex-col items-center justify-between gap-2 px-4 py-2 text-sm text-slate-500 md:flex-row">
            <p>© 2026 NovaShop. All rights reserved.</p>

            <div className="flex gap-4">
              <IonButton fill="clear" size="small" color="medium">
                Privacy
              </IonButton>

              <IonButton fill="clear" size="small" color="medium">
                Terms
              </IonButton>

              <IonButton fill="clear" size="small" color="medium">
                Contact
              </IonButton>
            </div>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
