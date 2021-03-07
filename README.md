# Kjglass Project

## Refactoring kj hompage
* [HomePage](http://www.kjglass.co.kr)

### React, Mobx, Next, Styled-component

- [배포](https://eomtttttt-develop.tistory.com/207)
- [Domain 연결](https://eomtttttt-develop.tistory.com/208)

### Deploy

1. Run script
> $ ./deploy_kj_node.sh ~/Project/kjgalss-proj/.next

2. Access ec2 server
> $ ./connect_kj_node.sh

3. Remove old .next build files
> $ rm -rf kjglass-proj/.next/

4. Move new .next build files
> $ mv .next/ kjglass-proj/

[Script in Private Repo](https://github.com/eomttt/personal-data)

