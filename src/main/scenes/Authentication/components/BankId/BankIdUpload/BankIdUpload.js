import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import {SignInLink} from '../../../components';
import {Button, Checkbox} from '../../../../../components';
import './BankIdUpload.less';

class BankIdUpload extends PureComponent {
    state = {
        file: null,
        loadMore: false
    }

    toggleLoadMore = () => this.setState(({loadMore}) => ({loadMore: !loadMore}))

    onDrop = file => this.setState({
        file: {
            ...file,
            preview: window.URL.createObjectURL(new File(file, 'img'))
        }
    })

    onCancel = () => this.setState({file: null})

    componentReload = () => {
        this.componentWillUnmount();
        this.setState({
            file: null,
            loadMore: false
        });
    }

    componentWillUnmount() {
        // Make sure to revoke the data uris to avoid memory leaks
        const {file} = this.state;
        window.URL.revokeObjectURL(file && file.preview);
    }

    renderDropZone = () => (
        <Dropzone
            className="bank-id-upload__drop-zone"
            onDrop={this.onDrop}
            onFileDialogCancel={this.onCancel}
            accept="image/*"
        >
            <div>Upload your ID</div>
            <div className="bank-id-upload__content">
                <div>Drag & Drop</div>
                <div>your files of browse</div>
            </div>
        </Dropzone>
    )

    renderDocumentLoaded = () => {
        const {file, loadMore} = this.state;

        return (
            <>
                <p>Your ID has been uploaded</p>
                <img
                    className="bank-id-upload__preview"
                    alt="Document preview"
                    src={file.preview}
                />
                <div>
                    <div style={{display: 'flex'}}>
                        <p>Do you want to upload other documents?</p>
                        <Checkbox
                            onChange={this.toggleLoadMore}
                            checked={loadMore}
                        />
                    </div>
                    {
                        loadMore ? (
                            <Button
                                text={'Next'}
                                onClick={this.componentReload}
                                fill
                            />
                        ) : (
                            <NavLink to={'/register-company'}>
                                <Button
                                    text={'Next'}
                                    fill
                                />
                            </NavLink>
                        )
                    }
                </div>
            </>
        )
    }

    renderDefault = () => (
        <>
            <p>Do you want to upload a scan of your ID now?</p>
            {this.renderDropZone()}
            <div className="bank-id-upload__inline-section">
                <NavLink to={'/register-company'}>
                    <Button
                        text={'Skip'}
                        fill
                    />
                </NavLink>
                <Button
                    text={'Next'}
                    onClick={this.props.handleSubmit}
                    fill
                />
            </div>
        </>
    )

    render() {
        return (
            <div className="bank-id-upload">
                {
                    this.state.file ? this.renderDocumentLoaded() : this.renderDefault()
                }
                <SignInLink/>
            </div>
        )
    }
}

BankIdUpload.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default BankIdUpload;
