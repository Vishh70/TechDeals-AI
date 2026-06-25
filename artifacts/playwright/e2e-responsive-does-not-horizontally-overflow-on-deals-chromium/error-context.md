# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\responsive.spec.ts >> does not horizontally overflow on /deals
- Location: tests\e2e\responsive.spec.ts:7:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=e2]:
    - navigation [ref=e3]:
        - generic [ref=e5]:
            - link "SmartNivad Logo SmartNivad" [ref=e6] [cursor=pointer]:
                - /url: /
                - img "SmartNivad Logo" [ref=e7]
                - text: SmartNivad
            - generic [ref=e8]:
                - generic [ref=e9]:
                    - button "Deals" [ref=e10]:
                        - img [ref=e11]
                        - text: Deals
                        - img [ref=e14]
                    - generic:
                        - generic:
                            - link "All Deals":
                                - /url: /deals
                            - link "Hot Deals":
                                - /url: /deals?type=HOT
                            - link "Coupons":
                                - /url: /coupons
                - link "Stores" [ref=e16] [cursor=pointer]:
                    - /url: /store
                    - img [ref=e17]
                    - text: Stores
                - generic [ref=e21]:
                    - button "Hardware" [ref=e22]:
                        - img [ref=e23]
                        - text: Hardware
                        - img [ref=e26]
                    - generic:
                        - generic:
                            - link "Audio":
                                - /url: /deals?category=audio
                                - img
                                - text: Audio
                            - link "Gaming":
                                - /url: /deals?category=gaming
                                - img
                                - text: Gaming
                            - link "Laptops":
                                - /url: /deals?category=laptops
                                - img
                                - text: Laptops
                            - link "Smartphones":
                                - /url: /deals?category=smartphones
                                - img
                                - text: Smartphones
                - link "Blog" [ref=e28] [cursor=pointer]:
                    - /url: /blog
                    - img [ref=e29]
                    - text: Blog
                - link "Quiz Answers" [ref=e31] [cursor=pointer]:
                    - /url: /quiz-answers
                    - img [ref=e32]
                    - text: Quiz Answers
            - button "Search" [ref=e36]:
                - img [ref=e37]
    - main [ref=e42]
    - contentinfo [ref=e208]:
        - generic [ref=e209]:
            - generic [ref=e210]:
                - generic [ref=e211]:
                    - heading "TA TechDeals ." [level=3] [ref=e212]:
                        - generic [ref=e213]: TA
                        - text: TechDeals
                        - generic [ref=e214]: .
                    - paragraph [ref=e215]: Discover AI-curated tech deals. We analyse thousands of products daily and surface only the best value for money.
                    - generic [ref=e216]:
                        - link "📲 WhatsApp" [ref=e217] [cursor=pointer]:
                            - /url: /contact
                        - link "✈️ Telegram" [ref=e218] [cursor=pointer]:
                            - /url: /contact
                - generic [ref=e219]:
                    - heading "Deals" [level=4] [ref=e220]
                    - list [ref=e221]:
                        - listitem [ref=e222]:
                            - link "All Deals" [ref=e223] [cursor=pointer]:
                                - /url: /deals
                        - listitem [ref=e224]:
                            - link "Hot Deals" [ref=e225] [cursor=pointer]:
                                - /url: /deals?type=HOT
                        - listitem [ref=e226]:
                            - link "Coupons" [ref=e227] [cursor=pointer]:
                                - /url: /coupons
                        - listitem [ref=e228]:
                            - link "Compare" [ref=e229] [cursor=pointer]:
                                - /url: /compare
                - generic [ref=e230]:
                    - heading "Content" [level=4] [ref=e231]
                    - list [ref=e232]:
                        - listitem [ref=e233]:
                            - link "Blog" [ref=e234] [cursor=pointer]:
                                - /url: /blog
                        - listitem [ref=e235]:
                            - link "Quiz Answers" [ref=e236] [cursor=pointer]:
                                - /url: /quiz-answers
                        - listitem [ref=e237]:
                            - link "Stores" [ref=e238] [cursor=pointer]:
                                - /url: /store
                        - listitem [ref=e239]:
                            - link "Brands" [ref=e240] [cursor=pointer]:
                                - /url: /brand
                - generic [ref=e241]:
                    - heading "Legal" [level=4] [ref=e242]
                    - list [ref=e243]:
                        - listitem [ref=e244]:
                            - link "About Us" [ref=e245] [cursor=pointer]:
                                - /url: /about
                        - listitem [ref=e246]:
                            - link "Contact" [ref=e247] [cursor=pointer]:
                                - /url: /contact
                        - listitem [ref=e248]:
                            - link "Privacy Policy" [ref=e249] [cursor=pointer]:
                                - /url: /privacy
                        - listitem [ref=e250]:
                            - link "Terms of Service" [ref=e251] [cursor=pointer]:
                                - /url: /terms
                        - listitem [ref=e252]:
                            - link "Disclaimer" [ref=e253] [cursor=pointer]:
                                - /url: /disclaimer
            - generic [ref=e254]:
                - paragraph [ref=e255]: As an Amazon Associate and affiliate partner, we earn from qualifying purchases.
                - paragraph [ref=e256]: © 2026 TechDeals AI. All rights reserved.
    - button "Open AI Assistant" [ref=e257]:
        - img [ref=e258]
```
