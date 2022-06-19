import styled from 'styled-components'

export const ListHeader = styled.div`
    background: #F2F2F2;
    border-radius: 3px 3px 0px 0px;
    justify-content: space-around;
    display: flex;
`

export const ListTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    thead {
        tr {
            background: #F2F2F2;
            th {
                padding: 16px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                letter-spacing: -0.25px;
                color: #5E5E5E;
            }
        }  
    }
    tr {
        align-items: center;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 0 3px #ddd;
        display: flex;
        flex-direction: row;
        margin-bottom: 0px;
        th {
            padding: 16px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: -0.25px;
            color: #5E5E5E;
          }
          td,
            th {
                display: table-cell;
                vertical-align: middle;
                width: 100%;
                padding: 16px;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                letter-spacing: -0.25px;
                color: #5E5E5E;
            }
        }
    }
`

export const HeaderList = styled.div`
    padding: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.25px;
    color: #5E5E5E;
`