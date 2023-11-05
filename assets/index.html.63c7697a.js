import{_ as c,r as o,o as l,c as r,a,w as e,b as n,d as s}from"./app.ff164605.js";const i={},u=n("hr",null,null,-1),k=n("h2",{id:"quick-start",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#quick-start","aria-hidden":"true"},"#"),s(" Quick Start")],-1),d=n("div",{class:"language-json ext-json line-numbers-mode"},[n("pre",{class:"language-json"},[n("code",null,[s(`curl -X POST  \\
  'https`),n("span",{class:"token operator"},":"),n("span",{class:"token comment"},"//api.sandbox.shipber.com/v1/open-api/rate' \\"),s(`
  -H 'Content-Type`),n("span",{class:"token operator"},":"),s(`application/json' \\
  -H 'Api-Key`),n("span",{class:"token operator"},":"),s(`2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret`),n("span",{class:"token operator"},":"),s(`qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"shipment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"ship_from"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"90045-6275"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"country_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"US"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"state_province_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"CA"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"LOS ANGELES"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"ship_to"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Penfield"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"state_province_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"NY"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"14526"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"country_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"US"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"packages"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"dimension"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"width"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"height"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"length"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"IN"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"lb"'),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"confirmation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"None"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"quantity"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"common"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Package"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pickup_date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"20211010"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`'

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-json ext-json line-numbers-mode"},[n("pre",{class:"language-json"},[n("code",null,[s(`curl -X POST  \\
  'https`),n("span",{class:"token operator"},":"),n("span",{class:"token comment"},"//api.sandbox.shipber.com/v1/open-api/label' \\"),s(`
  -H 'Content-Type`),n("span",{class:"token operator"},":"),s(`application/json' \\
  -H 'Api-Key`),n("span",{class:"token operator"},":"),s(`2cn1wgmfidytin3jef3b' \\
  -H 'Api-Secret`),n("span",{class:"token operator"},":"),s(`qRBYybjRch7BdTxO5NTyGUd6mBvowNbsjahnAnpdI-BXc5sCrRt15XGr-hc9oY7C' \\
  -d '`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"rate_id"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"eyJjaGFpbklkIjo0MTksInNlcnZpY2VDb2RlIjoiZmVkZXhfZ3JvdW5kIiwicGFja2FnZVR5cGUiOiJQYWNrYWdlIn0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"custom_order_num"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"cimy-977885"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"shipment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token property"},'"ship_from"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"uuid"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"7b572b8d-08a3-4cc7-a711-1aae28e9ffcf"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"ship_to"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"city"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Kansas City"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Test Company"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"addresses"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token string"},'"6925 Riverview Ave"'),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"postal_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"66102"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"country_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"US"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"state_province_code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"KS"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"phone"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0123456789"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"packages"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token property"},'"dimension"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"width"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"height"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"13"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"length"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"IN"'),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"weight"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token property"},'"code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"lb"'),n("span",{class:"token punctuation"},","),s(`
                    `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"6"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"confirmation"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"None"'),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"quantity"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token property"},'"reference_numbers"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token punctuation"},"{"),s(`
                        `),n("span",{class:"token property"},'"code"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"reference #1"'),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token property"},'"value"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1"'),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"package_type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token property"},'"type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"common"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Package"'),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token property"},'"pickup_date"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"20211010"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`'
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function b(v,y){const t=o("CodeGroupItem"),p=o("CodeGroup");return l(),r("div",null,[u,k,a(p,null,{default:e(()=>[a(t,{title:"Rate"},{default:e(()=>[d]),_:1}),a(t,{title:"Shipping"},{default:e(()=>[m]),_:1})]),_:1})])}var _=c(i,[["render",b],["__file","index.html.vue"]]);export{_ as default};
