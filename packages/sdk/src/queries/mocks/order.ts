import { GetOrderResponseDto } from '@web3chief/sdk/types'

export const ORDER: GetOrderResponseDto = {
  orderID: 1,
  orderStatus: 'OPEN',
  seller: '0x3a5557ECE3Cb2804d649fed545d5FbAF1b667D2B',
  executeUser: '',
  cancelUser: '',
  price: '1000000000000000000',
  preparedPrice: '1',
  tokenIn: {
    name: 'BPT TEST (BPT)',
    smartContract: '0x9dEFc95b679fF23a68162f5E8c2Af7b38AD27C32',
    icon: 'https://www.boldpoint.app/_next/static/media/bpt-icon.1741cf6f.png',
    decimal: 18,
  } as any,
  tokenOut: {
    standart: 'ERC1155',
    type: 'ERC1155',
    smartContract: '0x6985ce88e88373def7c0bac9580ee291e4fa9241',
    tokenId: 0,
    img: 'https://bold-point.mypinata.cloud/ipfs/QmYuM8cZ5vjcSrMmegbYz9dTJT4Fcqo8Sv4TR2Jt51qHWb/0000000000000000000000000000000000000000000000000000000000000000.png',
    count: '1',
    description:
      'Winchester was raised in the Syndicate capital, Intersyndicate, where he was an outcast. Syndicate are cold and calculating, while Winchester is just cold-blooded. Indiscriminate in murder, his blade knows race, gender and even age as little more than trivialities. This recklessness led him close to capture one too many times and knowing how Syndicate treat lawbreakers, he thought it best to leave.\n\nMercenary work—perfect for a man like Winchester—led him from capture and out into the vast expanse of the universe. A trail of blood follows him and those that spot it are most likely to add some of their own.',
    category: {
      name: 'HEROES',
      icon: 'https://gameficore.s3.eu-west-2.amazonaws.com/zoa/nft-marketplace/categories/heroes.svg',
    },
    properties: [
      {
        nameProperty: 'Hero race',
        nameValue: 'Syndicate',
        icon: 'https://gameficore.s3.eu-west-2.amazonaws.com/zoa/tokens/erc1155/heroes/Hero+race/syndicate.png',
        typeView: 'icon_text',
      },
      {
        nameProperty: 'Attack type',
        nameValue: 'Melee',
        icon: '',
        typeView: 'text',
      },
      {
        nameProperty: 'Hero type',
        nameValue: 'Carry',
        icon: 'https://gameficore.s3.eu-west-2.amazonaws.com/zoa/tokens/erc1155/heroes/Hero+type/Carry.svg',
        typeView: 'icon_text',
      },
      {
        nameProperty: 'Tier',
        nameValue: 'Epic',
        icon: 'https://gameficore.s3.eu-west-2.amazonaws.com/zoa/tokens/erc1155/heroes/Tier/Epic.svg',
        typeView: 'icon',
      },
    ],
    metaOriginal:
      '{\r\n  "name": "Winchester",\r\n  "description": "Winchester was raised in the Syndicate capital, Intersyndicate, where he was an outcast. Syndicate are cold and calculating, while Winchester is just cold-blooded. Indiscriminate in murder, his blade knows race, gender and even age as little more than trivialities. This recklessness led him close to capture one too many times and knowing how Syndicate treat lawbreakers, he thought it best to leave.\\n\\nMercenary work—perfect for a man like Winchester—led him from capture and out into the vast expanse of the universe. A trail of blood follows him and those that spot it are most likely to add some of their own.",\r\n  "image": "ipfs://QmYuM8cZ5vjcSrMmegbYz9dTJT4Fcqo8Sv4TR2Jt51qHWb/0000000000000000000000000000000000000000000000000000000000000000.png",\r\n  "properties": {\r\n    "Type": "Heroes",\r\n    "Hero race": "Syndicate",\r\n    "Attack type": "Melee",\r\n    "Hero type": "Carry",\r\n    "Tier": "Epic"\r\n  }\r\n}',
    metaPrepared: {
      name: 'Winchester',
      description:
        'Winchester was raised in the Syndicate capital, Intersyndicate, where he was an outcast. Syndicate are cold and calculating, while Winchester is just cold-blooded. Indiscriminate in murder, his blade knows race, gender and even age as little more than trivialities. This recklessness led him close to capture one too many times and knowing how Syndicate treat lawbreakers, he thought it best to leave.\n\nMercenary work—perfect for a man like Winchester—led him from capture and out into the vast expanse of the universe. A trail of blood follows him and those that spot it are most likely to add some of their own.',
      image:
        'ipfs://QmYuM8cZ5vjcSrMmegbYz9dTJT4Fcqo8Sv4TR2Jt51qHWb/0000000000000000000000000000000000000000000000000000000000000000.png',
      properties: {
        Type: 'Heroes',
        'Hero race': 'Syndicate',
        'Attack type': 'Melee',
        'Hero type': 'Carry',
        Tier: 'Epic',
      } as any,
    },
  } as any,
}

export const NFT_INFO = {
  tokenId: 1,
  seller: '0x3a5557ECE3Cb2804d649fed545d5FbAF1b667D2B',
  category: {
    name: 'HEROES',
    icon: 'https://gameficore.s3.eu-west-2.amazonaws.com/zoa/nft-marketplace/categories/heroes.svg',
  },
  img: 'https://bold-point.mypinata.cloud/ipfs/QmYuM8cZ5vjcSrMmegbYz9dTJT4Fcqo8Sv4TR2Jt51qHWb/0000000000000000000000000000000000000000000000000000000000000000.png',
  count: '1',
  standart: 'ERC1155',
  properties: [
    {
      nameProperty: 'Hero race',
      nameValue: 'Syndicate',
      icon: 'https://gameficore.s3.eu-west-2.amazonaws.com/zoa/tokens/erc1155/heroes/Hero+race/syndicate.png',
      typeView: 'icon_text',
    },
    {
      nameProperty: 'Attack type',
      nameValue: 'Melee',
      icon: '',
      typeView: 'text',
    },
    {
      nameProperty: 'Hero type',
      nameValue: 'Carry',
      icon: 'https://gameficore.s3.eu-west-2.amazonaws.com/zoa/tokens/erc1155/heroes/Hero+type/Carry.svg',
      typeView: 'icon_text',
    },
    {
      nameProperty: 'Tier',
      nameValue: 'Epic',
      icon: 'https://gameficore.s3.eu-west-2.amazonaws.com/zoa/tokens/erc1155/heroes/Tier/Epic.svg',
      typeView: 'icon',
    },
  ],
  metaOriginal:
    '{\r\n  "name": "Winchester",\r\n  "description": "Winchester was raised in the Syndicate capital, Intersyndicate, where he was an outcast. Syndicate are cold and calculating, while Winchester is just cold-blooded. Indiscriminate in murder, his blade knows race, gender and even age as little more than trivialities. This recklessness led him close to capture one too many times and knowing how Syndicate treat lawbreakers, he thought it best to leave.\\n\\nMercenary work—perfect for a man like Winchester—led him from capture and out into the vast expanse of the universe. A trail of blood follows him and those that spot it are most likely to add some of their own.",\r\n  "image": "ipfs://QmYuM8cZ5vjcSrMmegbYz9dTJT4Fcqo8Sv4TR2Jt51qHWb/0000000000000000000000000000000000000000000000000000000000000000.png",\r\n  "properties": {\r\n    "Type": "Heroes",\r\n    "Hero race": "Syndicate",\r\n    "Attack type": "Melee",\r\n    "Hero type": "Carry",\r\n    "Tier": "Epic"\r\n  }\r\n}',
  metaPrepared: {
    name: 'Winchester',
    description:
      'Winchester was raised in the Syndicate capital, Intersyndicate, where he was an outcast. Syndicate are cold and calculating, while Winchester is just cold-blooded. Indiscriminate in murder, his blade knows race, gender and even age as little more than trivialities. This recklessness led him close to capture one too many times and knowing how Syndicate treat lawbreakers, he thought it best to leave.\n\nMercenary work—perfect for a man like Winchester—led him from capture and out into the vast expanse of the universe. A trail of blood follows him and those that spot it are most likely to add some of their own.',
    image:
      'ipfs://QmYuM8cZ5vjcSrMmegbYz9dTJT4Fcqo8Sv4TR2Jt51qHWb/0000000000000000000000000000000000000000000000000000000000000000.png',
    properties: {
      Type: 'Heroes',
      'Hero race': 'Syndicate',
      'Attack type': 'Melee',
      'Hero type': 'Carry',
      Tier: 'Epic',
    },
  },
}
