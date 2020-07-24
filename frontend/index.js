import {initializeBlock, FormField, Input } from '@airtable/blocks/ui'
import React, {useState} from 'react'

function HelloWorldBlock() {
const [serialNum, setSerialNum] = useState('')

    return(
        <div>
            <h1>Hue Helper</h1>
            <FormField label="Serial #">
                <Input value={serialNum} onChange={e => setSerialNum(e.target.value)} />
            </FormField>
        </div>
    )
}

initializeBlock(() => <HelloWorldBlock />);
