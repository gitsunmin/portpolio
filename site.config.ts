import * as types from '@/lib/types';

import { O, Option } from '@mobily/ts-belt';

export interface SiteConfig {
  rootNotionPageId: string;
  rootNotionSpaceId: Option<string>;

  name: string;
  domain: string;
  author: string;
  description: Option<string>;
  language: Option<string>;

  twitter: Option<string>;
  github: Option<string>;
  linkedin: Option<string>;
  newsletter: Option<string>;
  youtube: Option<string>;
  zhihu: Option<string>;
  mastodon: Option<string>;

  defaultPageIcon: Option<string>;
  defaultPageCover: Option<string>;
  defaultPageCoverPosition: Option<number>;

  isPreviewImageSupportEnabled: Option<boolean>;
  isTweetEmbedSupportEnabled: Option<boolean>;
  isRedisEnabled: Option<boolean>;
  isSearchEnabled: Option<boolean>;

  includeNotionIdInUrls: Option<boolean>;
  pageUrlOverrides: Option<types.PageUrlOverridesMap>;
  pageUrlAdditions: Option<types.PageUrlOverridesMap>;

  navigationStyle: Option<types.NavigationStyle>;
  navigationLinks: Option<Array<NavigationLink>>;
}

export interface NavigationLink {
  title: string;
  pageId: Option<string>;
  url: Option<string>;
}

const SiteConfig: SiteConfig = {
  name: "Gitsunmin's Blog",
  rootNotionPageId: '60d2a1c363524af3b9936a3b3b9534fb',
  author: 'Gitsunmin',
  defaultPageCover:
    'https://gitsunmin.notion.site/images/page-cover/gradients_10.jpg',
  defaultPageCoverPosition: O.None,
  defaultPageIcon:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABMlBMVEX////78N8AAAD23s7+u9DMvqf//vz/YWT/9OO3FCL7794GBgYMDAz44NB7DRe7FCMRERHAwMD06df35NMWFhZiYmKgoKDv7+8aGhr5+fn++vTXyrT/9+Xr38zf399vb2/X19eQkJDLy8u+rKBWVlY1NTXs4M376d0mJia0tLSZmZnbzrl/f39eXl79ydT83Nneybqrq6tFRUW8tKdqamoyMjKRi4H9w9K2pJjGvbBNTU0iIiI+OzeHgXhbV1GCgoKhmo/91NdkCxOWOTsmDg9pZF14c2vUy73Bjp+djoM+BwuGMzQtERLPT1GRg3pxKyxGNDozKSrDq6jYn7EjGR19XGdnTFXvsMSddIFZQUiSEBulEh9QCQ9dChF1DRUaAwRUICE1Bgq5RknlV1laIiM9Fxj01joKAAAWKklEQVR4nO2dCXcaR7bHobHkTgMJi8QSsUtCICGbRcgCIYRjA1a8ZDJ5b/LGnpd4ksn3/wpTa3dVdXV3FbSEdA7/cxIZkIr69b1169bS1ZHIVltttdVWW2211VZbbbXVVo9CxXw+n851LoCqvTR4Udx0jcJVpZbbvzYY7Z3napVN1yo0AdsdGRId5Rr5TdctDFV61YKMD6rV6T15Q9bqYy88pMRR/Ukz5qvHvnxI/frT9dVOIpgPOWtv0zVdSfmcCJJqHY/PgSbHrT3ho+vGk+s88um+YKejao62uN1abjFt8Z+fV54UYzFdFepfb8PGtru7+z2QaZZKmcENfw1SuScUcmp1vgFW27DyCM80o1YUyTSXszn3a+PeEzFjPscbp5rOQ7wIwIvashBjeTBlf3Ov2th05VWUPkqxtd5v5Kn5EBm2YPngLANem9HyaML+9nHn8ZuxyoXJfqO4i/hMq5wBZJmDA/gjerazs0MYMwPO4sfpTRP4q83VttVG5oN80fLODiLc2YGIFkQEjJC2ZF1yad3+4404xco+W9NJ3eGLQkLyA/004T92dsqYcblgBx7XvUea5FROWQdtdWqY73scWgBRkxjxDCE2DyDiQRPHVT7k7D9GVy22z9k6XqSLOL5ksJmgzcomMeJZ1EHcKUNeq1SecSHntLZpIFG1DtuWWqADxA6aOdspIx7Q8M4goQW50FvInnZrNM3RgkV8ZJ1jsc51gbcV3EGYtnOi6HlgEnfdwQGVRwRGHbBmLFw8os6xwY0BjxtFbEAmduLgiQgzCMpiEQkw6B1v2IKuO5sGI8p3uGqdEj5qMAyDWEzqr9SwZnOHRYRZzpAtzHgMESffizM1Sl3gBriLI2iGb3Nm1DEiMRvuNOhLyDjjBs392oabY5530HGO7QKj0QPbWogEv2keOEYkH9DrgD5eLtiBVaJe2yRg7ZblG9Y5A5KeIeOAZBioAzLEQAkcJLbTcjMz4MYck80Nqyp1rgurNtgWSBsZNg7O0ggCclOKS145xECl8oAbH59vqOc45SZBWyDV4gyImx7OWUjQJOioS8S9I+unzNgKjB25zjGxiWFVus+Ncjv5Xc6AdnKNX+CYabKf0Ff0JY2n1FX5YVWr+sCuWuFSNGOCu3jGgNQ0TbbpmbKPbD89Y4wIGa0ZP5PcecB8vML1gMZxbpfyOY0JU5wxDusQZgSissSIqDlyQw7DyD0QY6XHDeKPb2kEZW1AuvIMi2S3NAGYpjZl3ojAjKXBlLPjMP0AjPk0P01/24hwoyRctSbveGeCW2Ii0aPPoi6ZmRk3rEIB+37V4B30ok16CM6ANDzSHsDCL20XJrHF8UpiVNFNo3hGjgs5w/td58jn+Hkj0kMIfDQVE/KWA/sXLMGmLiPzZlxeclf16B7XAGrnXAusV3YjYvtzqstkYmJiRpCZN5ryhkgZy8Kk4321Rn4hYh/xRVx8GQp4Rr2SjzpSQpyrnllRuUxrxA1A72dCLs9+x16/Rga5YqUIDlNd62BHrL6LEL9zJmmIlDHKDY+NeugBp5hmMsX4uB2R+qdjQKa2Zb5Rygktr1Bjq5S5ZBnPQ87j8qdMv0TGEC4+0yKTSxxgxm1CCSFyU19CNOnI1AJOxoanCruU1GnABvg9m8BgMzRtA+IJNPwuyTq5OFl2WdUsBxOCkHPFhpzT8Dy1xowiEu28zIBmlOFjcZquQGoTcjwZBUKg5Q0TzjthdY1tZl7hvIYM6OIr2/5JJ7JJxclcE29vTMgXokRogeHxkK1NKIBpNoRhA/J4phNfxIBIfHRHqDqOnDzhgZINgZpM2ngcBiKTpk3SkYirh7DKDN5BOSpL3zI8DObmHRfmCT69BSOzNHOGpom1e8Zi3QHcr7gN6Jjp4OCsnDF5FNIIm6bsT0TT+PT4IiM7Ol4zpBbrzlzhLfZQVy2aZaBmMxM1xdbpAUjmN4R3My6r+iAu5/FwEIvOgvx1ThZi8PeZIht+OyPpJyiMO83WIQSdCxNT10F0LNhvuwa5QZXAYVTWtjLu6AqTO7VAQ0uf2Wt5hdUHG85saL+xK2mCvsL5TVnWtMruOAO5NQBRomrXbi+3NuBRRR/Qy4A40OjYy0ujdcNNzwH0iDF+KnsHf0tqQn2Zy/XaYruwDmA0U854NVqNfsFf5nK4BmLNHg6OJXnMWjoLxUeh2I5RF9GZ8j2X9vPrqCzpQFYUi6iX3TirnuNa2IBRKyQLQpkDuzHt6VixaE/JkG5Cox98YFlOp6EzJq7Rnr6AOvrdxwsIrOjMNV6rI1LAeC7y2AEBIrOeqop4Qf/gFk/4hhLa701mhg4Y46qI9pB3P+x+4n5kLid6iPbEaAsvKm0aQEEDsgoXjyt1GnY62n4CjRDJzNCdRgDxOHAiNU0zobq4qvt4ZdoLGwnUg/v7KJ0a7Yeey9yjTLp5Iw4QL/wXbuxdvo2n4qNQVondu3HrN1Vco2Gpnn8yPopk0orDob/fiJgOCkk6+kRMGIV+Si0I4mncO6DmyfR2giQzj7uv51Rigo1x7DnfTzPuo6fR17Myl9SGELHqAVgkQ5FU7ymFGapLhtCrKdomLD6BfFSUuSSZTQJO3+zVpIR0CjL9VNI1TtaM6TGMIxkg7QtbkafVUxCZSxon4egvcSohpHMz7ScXZohmDKHRd/tpjWQ+10/ThHBeijWiJLWhC2m5lU0oX6LRL2XVv8yQ3C2FwmlL7PeLxEkLq/WF8M7X5bJcKpXWoASFwFIyKxZS4rekinun6LCpWlwhXytFBzfz6bg/ni9my1WNYJaas8V82u9P5zezzAqQZplMaOzFSZ/A6ZSQN/RNaJqXE/vqpVrTUUm7clG0X2Zir0TsTW7K+qXQIQaZShtzRqQDQzQu1DOhOeL38hrG1HPRwruQzKVQiDHTLsWeICYru5wRG2T4cVrUNKHZvBGrZhjDkWZCZC6n7lKmHrsVfYohFAS0xYZT2t2jfEan4Cb0jOvx0ZjbmjkcaCHilGt4dMQfpDHRRSzdcG5qsJM2pBn24cBQx4RoFqjarlVqvQu2csORDmAZkB3X05VK+pTbZa1rRZMumxLEvgNI7+Ht5DVNOINT47hF80dhjDUql5mj+75x4sFdqBvNZRzL4NzUcAaKDZLQnEa0cm6zXGA3e3K3Oi+U/RTuAbq2o0KNteL1QC+ilkhDpE3GGSg2SIEwJ9UYNpXmBjtDWeFa0VLRiOZyzI0F6mwhcz0/NYWwd2x3GGSCBs7PRDTKaxr8zSzcDZJ9xctfghkzM2RNc6UMtAitkcEpRculS6IXRa04U7rk6xbhzzRRK8Qsw9WjGhMTuGBzo7VinI1R9yY/LyghKbQT0YozyOvZgRh/P9RMqSicMDBxvcZtW2+pOjshJA5AQw1tQxWMDIaNOiY0yzA+sQku1ycacyU3xROBdaeQNn86z0iHMBkjy4l2TXJciCj09AhH8Eq1nMvf4KpmTNQaIhq4jp3045YvZaABCAg/8X9tkONSCOEQpN06e9dm6ErZCwV58egkJUK8cmSHBCHQwPRUvUZWMnkoEJKVGrIqelyL6OQzdC/rPkbkT/5QJmziAcF1Dl/stHgC2qUGYSaW7Ap/nsCLpiQbOdJyUpvQKHTSjXZVHGHoEYKrfZpu5MauI9B0CLM2YcIezuUEQp1mbQ7EY8l4DdW81DVs4jXTyOEhYUEgvICZW5HkgudaTupMwnpoqkRYGvgWohVLZYRD2BCLpAVV9Qij5lBaJ6pLxd7C1xMKGv2hlQSEODONO1M2DY5Qb7BSmsvqZEstpZQOfh3pJKaIEJfm2BDtz3AItQCd4Zj86qsOCySTBI5mGvXJxmSEt3mGUHOxwjJbskoRqebM5sDH2Sc6SZuc8Jwl1F1v8jNiSznKmz7OfqkBaMkJhxWH8EJ/As+7cuoX39nV5JLWNAZohjLCFEOoliozRZ6cxP4mr1pcJ9kqeYXTn/9+cqLuVsCEslgKpzKKZFyn1oFRnZy8fvHs2S9SxL1L160yvoizuKyU/3n37NmL1y9P1AqxMCG+WHHmmsHugsy0jTUIrZcAD+qXf7qrltADdC05OIBQL9QYoZNKenyct5GsbazuESeEDyL+r1i11kATEGjg6hX/8c7+ihcvFUqAJrTzUtaGOWdsoR6aT149c/Sr4KmXy6g2YDRannGdxt/e/cp8xatgRIsjNBi3rxad8aEqIQeIGP9BS/z5/359udLKjHny6p19pf7J8UEFIiInjSWv3N6+7xBeX6kRioDEW9+9e/cL+tcqgMTvfwWFvJOV/iyoLVoxpDsPQjJIUMuVo6+lVXD0ehXClwGFvggIEthJY6Q5JwRCOtd2o0RovQiozKsVAK2gy/bMnxCbMEnn2q5FQtIhzpW6abmTslLswbhCgy5bQKFZQkio9gRCOufdVwo1j5IQt8KksPjkEDaIbZXGA4FeukqoCSb09VISZ5LiZKJDSIZBM6WGGBhp7FIsK2qh/7l/gv/IC6z1Ik2SENK9CizheZGZCVworRIEuSnxJ1NVuNAAI/o6KTFhLEuguBwQz7bRNWC1Pt//euPOWbL3QK7FkhTqe91e+5owS0wozgczhHQdX21gXvKrDck+/Ma1vOgg0M81/AEt6qTkO/lJVzwnTPdiqM6/vvTyKZokm0vPp6+4RJcmPB311Uv/zpCaMEYo+OEmXuq299Mop6ZSRmeggybEf/w2UD+wl9WSFvrqdUDvY5vwit9PwxHae6LUl3pOXr5+JdSEGcih3Ts/fBeoz+A7ryyfQoNHhxYxYSy5kAHGK/ySz0JnqecEVOjFi1dArwEdP+GQAR3Qj1+++4YRpWLf+5chTGszhcLx/Ulw9kADabJL+ooUN2NAN3/RvYmG7uDVIhLfhwvEv3/7HYP3zefffgD67QsD+R34xmNXy7C8CpVWwDahbKKAWcI9JbZVW5sOlglXPv+fgnzzzW9vnS/98C16C/yPa4aryQak678JftInRxdfK8RNW2Ht0TdBYW8/Y2t9+U28st9+QR/8Dnpnve0WomiYAZ0hvb+LJ3TWqOkC53pf6AhtMsNG/PwjLPj3rz+9f/P+/U9fkbf8+zNwXGjChfYGPU6OCT9JTXjtENLbY9WW/YJlluFXAX/EDvrhzR9/Pkf6+Mf7DxD4hy+f3+pvexJEwwwYVhAnTPCh9Ii5RYjOBIVlRLQH4d9fkKGMNx+fM/r4Br73L2hatTGpJ2BSNKHgo9wJhDRzm4Z1bkUZbl34EQK+/eO5oD9I4NHbL+NS1jYhmSh1EbIH9BTJeym1MZQCIlreBcHkr48i4PPnf/6Ehqk3IQHaJhQ2AvBb9unth1P9CV0PRHyTx1cJILAi/Ehnmt0t20eZeVLBhPxNs/T+Q601LV/hzTLvPQEna5Vu9/XO0NcQ93LUIxGZEZXz7yDhbXnGT3+6fBSFGq31T19AOjAUTSieB5KnfeJCf7e9L+J/hEjz8Sfkosu1ymYAu7QfEE14JN7Z3SYjq4LWbjI/mWU01H/7/iNrwL/ge/OwAGNJuhUgJa7SuR50Yt+PPwkr2MCz1VCJf1HGP998xX6yXi5jMYBXdAJYNGHLfcSCvW9uHhIg1AgnjB++vn/z5v3XD/g66ywSS8QCdunKnMuEfRcgs8t6vWSKk1leiF+tfSuFIKefAF0hcy6GINlZJ0V7D/KadWBllpZzZmPK9XSwzi1uUR4wSW+PjbsI4xJA5nya8JpiFDKObqbw/q/EcHozyJTWG6JZbJShgyZxUGG4OkOXn4bWZSCZpczoajabDcpr2k8AtBuh20cNj0NAivRk5MKawcAl+ATSEG40ZVwU+Cidlo0rmzASqdHYq7ZQ89BiAWNZ+1QTVxw1Ct6HRdtnuLS0Nso/jBgPBYD2orbER3Pex7g4xwfHw0pQQxMLmEze2XcduB8g7XtStJ3aGK0Q+4wQZPGAdi4TT7kADf+zaZ1z2B8VIg8YO5z4AJ4HHNnesLfv9JfhJTfrycomOQvagJKeUOGMwbTt2ONHgsgZEKbbNqBs2181+MECznHz40cRUTkDwih67Qc4VHmsgHPT63DziKIBs3fu4MlK6Qhs5xhTI7Xprl8wYDLJHF8mM+FEBTDCngdtzKwNMloiX5dZQZcBJlSf7lE8df5IbZfGfeAJDgoAR8xeVOnmYvVDhfN1Z0V8Ogp1qKEMKDgo6Aavhv58Wo8SYq04nDUf/HAsFx+c3Haw5IB6j7xiEQuL7sMiSviSh04TFCfwiY40nz9TZE9K6B9mQx4yavEBA945t2bE3eMl5Grazy3hEFOLZDL7IIYU4wuJoYzZJLko0N4qD4PgzrtoHcbun1FiPsAXu2OMJhkPInmO6/2tyO1xuOkCxqzaPomV8CTmgw7aZU4ikExZYN2uAogRmRKHsy64xPcCaVky8yEHZXeOegJ6HQmpgMgPoudXMXgXVciQgC4rMx/ku2PuhPfkozffr4jIz7cuDmPoJhxQp3AgrUxWaj3UAPnHkXoDrvXsx5ywyaE1P0ziGq1PiYwnx0Nz2twjZVMe/fz6jwxui/HrejpKJu2tEKtSArikFxzES16Nub2UngbUTGVkgkNi4T7BPrAjW7+sTsuElvNmw3ixGX8fbsp7VOhaKVwFES7zC19xPOvGRBtAt81aPsr6OCWL1/3E9+rupRfno5X6QZcaR5KvaX067CaljgbezfKS/570T2PdwwUPkZDMiVINV33mkyj0NMu4GK1T06tDlyHXELgO3cM74X7EhGzGkOoovKfL5uvybzte3I2SyhYKwIsdfpoL51EkEt4RxjAuaqEBgo6xF5czJibzT4frQmK86c9C2WAU4cOHjhQIUw2cXcQTLq+J/9wHiYBf8A+gy3bv5hP3IQZ7nj0gUjv0hwPbz0pKSFp+PDW5uUpSKZLh372aH8uamnwU6Hx8L8+wth++GvdIMIbzu263y1bfGywW63ZHYlyh5XuMcm0VwugFZarYhxvCJuJRidb002zU7SLUpEvdGPxkNLq76XscrgHK9T/hx4iHGENdYs6oTPh0xCC3648Xi09XQIe24KvFzXw88b6tBvRIHtMwjlr1+3rKOlLt1gnoIJT7pFNUKargXwUF+vUOWBeN0EMMr3yaOWEPXvKAJqMsEKQDzQcM2LtXAxLGHvuV0FULPnmHmlJ7njMwnG7DemR1kPiDEmHlUoWVTZkoJNTwAh8IFKbyVUm0KICqKtbVIKl84jogbjIXYhz4TKdwVeuIp+TheuwhTL+EEnwG21uqsKdh9sJ49afjrqzGrZQRc+7RtpmwYykJSfE98KE6GlLrwmeTzH0qfdoPrFxqz1ZwpPTg66QfIIB6qNY7Cq7hemrlGpvjg8o3qsG1XF3jdmUz/smqmM/5nd+2jm4fAR5RrTNctZV5KF7Yv8f8eiU1OuPQKFv96jpPh78/pU+rY/+TPxWU6l/U25uNLb6qtXOd/sqmjE+qp737Hjusr3wt3bs917Zlqt/ppTfcMWgoX6nV0vVz/6NcHbj9216tVnkydLaKeaBGrnPR9xh4FAoX1Vy6An7r0TumkippRg88Tthqq6222mqrrbbaaquttlpd/wVuS7c6GxFicAAAAABJRU5ErkJggg==',
  description: O.None,
  domain: 'https://gitsunmin.dev',
  github: O.None,
  includeNotionIdInUrls: O.None,
  isPreviewImageSupportEnabled: O.None,
  isRedisEnabled: O.None,
  isSearchEnabled: O.None,
  isTweetEmbedSupportEnabled: O.None,
  language: O.None,
  linkedin: O.None,
  mastodon: O.None,
  navigationLinks: O.None,
  navigationStyle: O.None,
  newsletter: O.None,
  pageUrlAdditions: O.None,
  pageUrlOverrides: O.None,
  rootNotionSpaceId: O.None,
  twitter: O.None,
  youtube: O.None,
  zhihu: O.None,
};

export const siteConfig = (config: SiteConfig): SiteConfig => {
  return config;
};

export default SiteConfig;
