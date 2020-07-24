import {initializeBlock, FormField, Input, Box, Select, useBase, useRecords, Text} from '@airtable/blocks/ui'
import React, {useState} from 'react'

function HueHelperBlock() {
    // Hooks & Stuff
const base = useBase()
const table = base.getTableByName('hue')
const records = useRecords(table)

    // Choices
const rooms = (table.getFieldByName('room')).options.choices
const roomChoices = Array.from(rooms.map(room => room.name))

    // State
const [serialNum, setSerialNum] = useState('')
const [lightName, setLightName] = useState('')
const [lightRoom, setLightRoom] = useState('')

function checkChoices() {
    console.log(roomChoices)
}

checkChoices()

    return(
<div>
    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap'}}>
        <h2>Add Light</h2>
    </div>

    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', width: '100%'}}>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="default"
            backgroundColor="lightGray1"
            borderRadius="large"
            padding={1}
            width={300}
            height={200}
            overflow="hidden"
        >
            <form>
                <FormField label="Serial #">
                    <Input value={serialNum} onChange={e => setSerialNum(e.target.value)} style={{width: '100%'}} />
                </FormField>
                <FormField label="Name">
                    <Input value={lightName} onChange={e => setLightName(e.target.value)} style={{width: '100%'}} />
                </FormField>
                <FormField label="Room">
                    <Select style={{width: '100%'}} options={roomChoices}>
                    </Select>

                </FormField>
            </form>
        </Box>

    </div>
</div>
    )
}

initializeBlock(() => <HueHelperBlock />);
