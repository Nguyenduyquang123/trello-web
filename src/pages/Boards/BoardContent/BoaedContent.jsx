
import Box from '@mui/material/Box'
import ListComlumns from './ListColumns/ListComlumns'
import { mapOrder } from '~/utils/sort'
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCenter,
  closestCorners
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import { cloneDeep } from 'lodash'

import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'


const ACTIVE_DRAG_ITEM_STYLE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_STYLE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_STYLE_CARD'
}

function BoardContent({ board }) {

  const poiterSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } })

  const MySensors = useSensors(mouseSensor, touchSensor )

  const [orderedColumns, setOrderedColumns] = useState([])

  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board] )

  const findColumnByCardId = (cardId) => {

    return orderedColumns.find(column => column.cards.map(card => card._id)?.includes(cardId))

  }

  const handleDragStart = (event) => {
    // console.log('handleDragStart:', event)
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_STYLE.CARD : ACTIVE_DRAG_ITEM_STYLE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
  }

  const handleDragOver = (event) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_STYLE.COLUMN) return

    // console.log('handleDragStart:', event)

    const { active, over } = event

    if (!active || !over) return

    const { id: activeDraggingCardId, data: { current : activeDraggingCardData } } = active

    const { id: overCardId } = over

    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    if (!activeColumn || !overColumn) return

    if (activeColumn._id !== overColumn._id) {
      setOrderedColumns(prevColumn => {
        const overCardIndex = overColumn?.card?.findIndex(card => card._id === overCardId)

        let newCardIndex
        const isBeLowOverItem = active.rect.current.translate &&
          active.rect.current.translate.top > over.rect.top + over.rect.height
        const modifier = isBeLowOverItem ? 1 : 0
        newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards.lenght + 1

        const nextColumns = cloneDeep(prevColumn)
        const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
        const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

        if (nextActiveColumn) {
          nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)

          nextActiveColumn.cardOderIds = nextActiveColumn.cards.map(card => card._id)
        }
        if (nextOverColumn ) {
          nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)

          nextOverColumn.cards =nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)

          nextOverColumn.cardOderIds = nextOverColumn.cards.map(card => card._id)
        }
        return nextColumns
      })
    }
  }

  const handleDragEnd = (event) => {

    //console.log('handleDragEnd:', event)

    if (activeDragItemType === ACTIVE_DRAG_ITEM_STYLE.CARD) {
      // console.log('hành động kéo ko lm')
      return
    }

    const { active, over } = event

    if (!over) return

    if (active.id !== over.id) {

      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)

      const newIndex = orderedColumns.findIndex(c => c._id === over.id)

      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // const dndOrderedColumnIsds = dndOrderedColumns.map(c => c._id)
      // // console.log(dndOrderedColumns)
      // // console.log(dndOrderedColumnIsds )
      setOrderedColumns(dndOrderedColumns)
    }
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)

  }

  const custumdropAnimation ={ sideEffects: defaultDropAnimationSideEffects({ styles:{ active:{ opacity:'0.5' } } }) }

  return (
    <DndContext
      sensors={MySensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={ handleDragEnd }
    >
      <Box sx={{
        backgroundColor:'primary.main',
        width:'100%',
        height:(theme) => theme.trello.boardContentHeight,
        p:'10px 0'
      }}>
        <ListComlumns columns={orderedColumns} />
        <DragOverlay dropAnimation={custumdropAnimation}>
          {!activeDragItemType && null}
          {(activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEM_STYLE.COLUMN) && <Column column={activeDragItemData} />}
          {(activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEM_STYLE.CARD) && <Card card={activeDragItemData} />}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent

