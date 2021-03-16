import React, { useCallback, useState } from 'react'
import { useTransition } from 'react-spring'

import { 
  Container, 
  LeftButton, 
  Menu,
  MenuItem,
  MenuContent,
  MenuHeader,
  MenuFooter,
  Twitter,
  Soundcloud,
  Github,
} from './styled'

interface Props {
  routes: RouteMap
  header?: { title: string, subTitle?: string }
}

const MobileNav: React.FC<Props> = ({ routes }) => {
  const [isOpen, setIsOpen] = useState(false)

  const transitions = useTransition(isOpen, null, {
    from: { position: 'absolute' as 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const onOpenMenu = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onClickMenuItem = useCallback(() => {
    onCloseMenu()
  }, [])

  return (
    <>
      <Container>
        <LeftButton onClick={onOpenMenu}>

        </LeftButton>
      </Container>
      {transitions.map(({ item, key, props }) => item && (
        <Menu key={key} style={props} onClick={onCloseMenu}>
          <MenuHeader></MenuHeader>
          <MenuContent>
            {Object.values(routes).map((route, index) => (
              <MenuItem key={index} onClick={() => onClickMenuItem()}>
                {`.0${index} ${route.title}`}
              </MenuItem>
            ))}
          </MenuContent>
          <MenuFooter>
            <Github>Github</Github>
            <Twitter>Twitter</Twitter>
            <Soundcloud>Soundcloud</Soundcloud>
          </MenuFooter>
        </Menu>
      ))}
    </>
  )
}

export default MobileNav
