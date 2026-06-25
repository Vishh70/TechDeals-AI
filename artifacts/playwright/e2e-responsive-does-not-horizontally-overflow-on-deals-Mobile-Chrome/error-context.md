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
                - button "Search" [ref=e9]:
                    - img [ref=e10]
                - button "Toggle menu" [ref=e15]:
                    - img [ref=e16]
    - main [ref=e17]
    - contentinfo [ref=e183]:
        - generic [ref=e184]:
            - generic [ref=e185]:
                - generic [ref=e186]:
                    - heading "TA TechDeals ." [level=3] [ref=e187]:
                        - generic [ref=e188]: TA
                        - text: TechDeals
                        - generic [ref=e189]: .
                    - paragraph [ref=e190]: Discover AI-curated tech deals. We analyse thousands of products daily and surface only the best value for money.
                    - generic [ref=e191]:
                        - link "📲 WhatsApp" [ref=e192] [cursor=pointer]:
                            - /url: /contact
                        - link "✈️ Telegram" [ref=e193] [cursor=pointer]:
                            - /url: /contact
                - generic [ref=e194]:
                    - heading "Deals" [level=4] [ref=e195]
                    - list [ref=e196]:
                        - listitem [ref=e197]:
                            - link "All Deals" [ref=e198] [cursor=pointer]:
                                - /url: /deals
                        - listitem [ref=e199]:
                            - link "Hot Deals" [ref=e200] [cursor=pointer]:
                                - /url: /deals?type=HOT
                        - listitem [ref=e201]:
                            - link "Coupons" [ref=e202] [cursor=pointer]:
                                - /url: /coupons
                        - listitem [ref=e203]:
                            - link "Compare" [ref=e204] [cursor=pointer]:
                                - /url: /compare
                - generic [ref=e205]:
                    - heading "Content" [level=4] [ref=e206]
                    - list [ref=e207]:
                        - listitem [ref=e208]:
                            - link "Blog" [ref=e209] [cursor=pointer]:
                                - /url: /blog
                        - listitem [ref=e210]:
                            - link "Quiz Answers" [ref=e211] [cursor=pointer]:
                                - /url: /quiz-answers
                        - listitem [ref=e212]:
                            - link "Stores" [ref=e213] [cursor=pointer]:
                                - /url: /store
                        - listitem [ref=e214]:
                            - link "Brands" [ref=e215] [cursor=pointer]:
                                - /url: /brand
                - generic [ref=e216]:
                    - heading "Legal" [level=4] [ref=e217]
                    - list [ref=e218]:
                        - listitem [ref=e219]:
                            - link "About Us" [ref=e220] [cursor=pointer]:
                                - /url: /about
                        - listitem [ref=e221]:
                            - link "Contact" [ref=e222] [cursor=pointer]:
                                - /url: /contact
                        - listitem [ref=e223]:
                            - link "Privacy Policy" [ref=e224] [cursor=pointer]:
                                - /url: /privacy
                        - listitem [ref=e225]:
                            - link "Terms of Service" [ref=e226] [cursor=pointer]:
                                - /url: /terms
                        - listitem [ref=e227]:
                            - link "Disclaimer" [ref=e228] [cursor=pointer]:
                                - /url: /disclaimer
            - generic [ref=e229]:
                - paragraph [ref=e230]: As an Amazon Associate and affiliate partner, we earn from qualifying purchases.
                - paragraph [ref=e231]: © 2026 TechDeals AI. All rights reserved.
    - navigation [ref=e232]:
        - generic [ref=e233]:
            - link "Home" [ref=e234] [cursor=pointer]:
                - /url: /
                - img [ref=e236]
                - generic [ref=e239]: Home
            - link "Deals" [ref=e240] [cursor=pointer]:
                - /url: /deals
                - img [ref=e242]
                - generic [ref=e245]: Deals
            - link "Coupons" [ref=e246] [cursor=pointer]:
                - /url: /coupons
                - img [ref=e248]
                - generic [ref=e252]: Coupons
            - link "Compare" [ref=e253] [cursor=pointer]:
                - /url: /compare
                - img [ref=e255]
                - generic [ref=e258]: Compare
    - button "Open AI Assistant" [ref=e259]:
        - img [ref=e260]
```
