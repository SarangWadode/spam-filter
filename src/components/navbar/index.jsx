import React from 'react';
import {createStyles, Header, Container, Group, Button, Burger} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import links from './links';

const HEADER_HEIGHT = 55;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));


export default function Navbar() {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);

  const items = links.map((link) => {
    return (
      <a key={link.label} href={link.link} className={classes.link} onClick={(event) => event.preventDefault()}>
        {link.label}
      </a>
    );
  });

  return (
    <Header sx={{ background: '#fff' }} >
      <Container className={classes.inner} fluid>
        <Group>
          <Burger opened={opened} onClick={() => toggleOpened()} className={classes.burger} size="sm"/>
          {/* App Logo here */}
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Button radius="xl" sx={{ height: 30 }}>
          Login
        </Button>
      </Container>
    </Header>
  );
}
