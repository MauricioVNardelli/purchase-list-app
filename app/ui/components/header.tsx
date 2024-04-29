import style from './header.module.scss';

import { useContext } from 'react';
import { Avatar, Group, Text } from '@mantine/core';
import { GlobalContext } from '@/app/contexts/GlobalContext';

const avatar = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png';

export default function Header() {
  const { user } = useContext(GlobalContext);

  console.log(user?.name)

  return (
    <div className={style.container}>
      <Group gap="sm" id='groupAvatar'>
        <Avatar size={40} src={avatar} radius={40} />
        <div>
          <Text fz="sm" fw={500}>
            {user?.name}
          </Text>
          <Text fz="xs" c="dimmed">
            {user?.email}
          </Text>
        </div>
      </Group>
    </div>
  )
}