# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\responsive.spec.ts >> does not horizontally overflow on /compare
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
    - main [ref=e42]:
        - generic [ref=e44]:
            - generic [ref=e45]:
                - heading "Product Comparison" [level=2] [ref=e46]
                - paragraph [ref=e47]: Select up to 3 products and compare them side-by-side.
            - generic [ref=e49]:
                - paragraph [ref=e50]: Choose products to compare below.
                - generic [ref=e51]:
                    - button "Nothing Phone 2a clean Android midrange deal Nothing Phone 2a clean Android midrange deal ₹21999" [ref=e52]:
                        - img [ref=e54]
                        - img "Nothing Phone 2a clean Android midrange deal" [ref=e56]
                        - generic [ref=e57]: Nothing Phone 2a clean Android midrange deal
                        - generic [ref=e58]: ₹21999
                    - button "Logitech MX Master 3S productivity mouse deal Logitech MX Master 3S productivity mouse deal ₹7995" [ref=e59]:
                        - img [ref=e61]
                        - img "Logitech MX Master 3S productivity mouse deal" [ref=e63]
                        - generic [ref=e64]: Logitech MX Master 3S productivity mouse deal
                        - generic [ref=e65]: ₹7995
                    - button "ASUS ROG Zephyrus G14 creator gaming deal ASUS ROG Zephyrus G14 creator gaming deal ₹139990" [ref=e66]:
                        - img [ref=e68]
                        - img "ASUS ROG Zephyrus G14 creator gaming deal" [ref=e70]
                        - generic [ref=e71]: ASUS ROG Zephyrus G14 creator gaming deal
                        - generic [ref=e72]: ₹139990
                    - button "Sony WH-1000XM5 work and travel headphone deal Sony WH-1000XM5 work and travel headphone deal ₹24990" [ref=e73]:
                        - img [ref=e75]
                        - img "Sony WH-1000XM5 work and travel headphone deal" [ref=e77]
                        - generic [ref=e78]: Sony WH-1000XM5 work and travel headphone deal
                        - generic [ref=e79]: ₹24990
                    - button "Samsung Galaxy S24 Ultra camera flagship offer Samsung Galaxy S24 Ultra camera flagship offer ₹119999" [ref=e80]:
                        - img [ref=e82]
                        - img "Samsung Galaxy S24 Ultra camera flagship offer" [ref=e84]
                        - generic [ref=e85]: Samsung Galaxy S24 Ultra camera flagship offer
                        - generic [ref=e86]: ₹119999
                    - button "MacBook Air M3 16GB for students and creators MacBook Air M3 16GB for students and creators ₹109900" [ref=e87]:
                        - img [ref=e89]
                        - img "MacBook Air M3 16GB for students and creators" [ref=e91]
                        - generic [ref=e92]: MacBook Air M3 16GB for students and creators
                        - generic [ref=e93]: ₹109900
            - generic [ref=e94]:
                - generic [ref=e95]: ⚖️
                - heading "Select at least 2 products to compare" [level=3] [ref=e96]
                - paragraph [ref=e97]: Choose from the grid above to start your side-by-side comparison.
                - link "Browse All Deals" [ref=e98] [cursor=pointer]:
                    - /url: /deals
                    - button "Browse All Deals" [ref=e99]
    - contentinfo [ref=e100]:
        - generic [ref=e101]:
            - generic [ref=e102]:
                - generic [ref=e103]:
                    - heading "TA TechDeals ." [level=3] [ref=e104]:
                        - generic [ref=e105]: TA
                        - text: TechDeals
                        - generic [ref=e106]: .
                    - paragraph [ref=e107]: Discover AI-curated tech deals. We analyse thousands of products daily and surface only the best value for money.
                    - generic [ref=e108]:
                        - link "📲 WhatsApp" [ref=e109] [cursor=pointer]:
                            - /url: /contact
                        - link "✈️ Telegram" [ref=e110] [cursor=pointer]:
                            - /url: /contact
                - generic [ref=e111]:
                    - heading "Deals" [level=4] [ref=e112]
                    - list [ref=e113]:
                        - listitem [ref=e114]:
                            - link "All Deals" [ref=e115] [cursor=pointer]:
                                - /url: /deals
                        - listitem [ref=e116]:
                            - link "Hot Deals" [ref=e117] [cursor=pointer]:
                                - /url: /deals?type=HOT
                        - listitem [ref=e118]:
                            - link "Coupons" [ref=e119] [cursor=pointer]:
                                - /url: /coupons
                        - listitem [ref=e120]:
                            - link "Compare" [ref=e121] [cursor=pointer]:
                                - /url: /compare
                - generic [ref=e122]:
                    - heading "Content" [level=4] [ref=e123]
                    - list [ref=e124]:
                        - listitem [ref=e125]:
                            - link "Blog" [ref=e126] [cursor=pointer]:
                                - /url: /blog
                        - listitem [ref=e127]:
                            - link "Quiz Answers" [ref=e128] [cursor=pointer]:
                                - /url: /quiz-answers
                        - listitem [ref=e129]:
                            - link "Stores" [ref=e130] [cursor=pointer]:
                                - /url: /store
                        - listitem [ref=e131]:
                            - link "Brands" [ref=e132] [cursor=pointer]:
                                - /url: /brand
                - generic [ref=e133]:
                    - heading "Legal" [level=4] [ref=e134]
                    - list [ref=e135]:
                        - listitem [ref=e136]:
                            - link "About Us" [ref=e137] [cursor=pointer]:
                                - /url: /about
                        - listitem [ref=e138]:
                            - link "Contact" [ref=e139] [cursor=pointer]:
                                - /url: /contact
                        - listitem [ref=e140]:
                            - link "Privacy Policy" [ref=e141] [cursor=pointer]:
                                - /url: /privacy
                        - listitem [ref=e142]:
                            - link "Terms of Service" [ref=e143] [cursor=pointer]:
                                - /url: /terms
                        - listitem [ref=e144]:
                            - link "Disclaimer" [ref=e145] [cursor=pointer]:
                                - /url: /disclaimer
            - generic [ref=e146]:
                - paragraph [ref=e147]: As an Amazon Associate and affiliate partner, we earn from qualifying purchases.
                - paragraph [ref=e148]: © 2026 TechDeals AI. All rights reserved.
    - button "Open AI Assistant" [ref=e149]:
        - img [ref=e150]
```
