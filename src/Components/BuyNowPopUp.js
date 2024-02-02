import React, { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Input, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { buyToken } from '../blockchain/Contract';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, px: 2, py: 1 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};


export default function BuyPopUp({ open, setOpen,address }) {
    const [amount, setAmount] = useState("")
    const [refer, setRefer] = useState("")

    const handleTokenValue = (e) => {
        setAmount(e.target.value)
        
    }
    const handleRefer = (e) => {
        setRefer(e.target.value)
        
    }
    const handleBuy = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <BootstrapDialog
                sx={{ zIndex: "11000" }}
                onClose={() => setOpen(false)}
                aria-labelledby="customized-dialog-title"
                open={open}

            >
                <BootstrapDialogTitle id="customized-dialog-title" >
                    Buy Now
                </BootstrapDialogTitle>
                
                <form onSubmit={handleBuy}>
                    <DialogContent dividers className='grid grid-row-1 gap-2'>
                        <TextField required value={refer} id="outlined-basic" type="text" label="Refer Id" variant="outlined" onChange={handleRefer} />
                        <TextField required value={amount} id="outlined-basic" type="text" label="Amount in ETH to Buy DFI Tokens" variant="outlined" onChange={handleTokenValue} />
                     
                    </DialogContent>
                    <DialogActions>
                        {
                            !amount ? (<Button disabled type="submit" variant="contained" autoFocus >
                                Buy
                            </Button>) :
                                (<Button style={{ background: "rgb(241, 85, 44)" }} type="submit" variant="contained" autoFocus onClick={()=>buyToken({refer,amount,address})}>
                                    Buy
                                </Button>)
                        }

                    </DialogActions>
                </form>
            </BootstrapDialog>
        </div >
    );
}