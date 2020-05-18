import React, { Component } from 'react';
import './Utils.css';
import {InputText} from 'primereact/components/inputtext/InputText';
import {Button} from 'primereact/components/button/Button';

export class UtilsDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <h1>Card</h1>
                    <p>Card is a section to group content and layout provides a built-in css for it. Apply .card style class to your container to use it. If the
                        card has a title defined with h1 tag, add card-w-title to adjust paddings.</p>
                    <pre>
&lt;div className="card"&gt;<br/>
                        &emsp;&emsp;Content here<br/>
                        &lt;/div&gt;<br/>
<br/>
                        &lt;div className="card card-w-title"&gt;<br/>
                        &emsp;&emsp;&lt;h1&gt;Card with Title&lt;h1&gt;<br/>
                        &emsp;&emsp;Content here<br/>
                        &lt;/div&gt;
</pre>

                    <div className="card">
                        Content
                    </div>

                    <div className="card card-w-title">
                        <h1>Card with Title</h1>
                        Content
                    </div>

                    <h1>Input Animations</h1>
                    <p>Label of an input can be animated on focus by wrapping both the input and label in an element with md-inputfield style class.</p>
                    <br />

                    <span className="md-inputfield">
                <InputText />
                <label>Name</label>
            </span>

                    <pre>
&lt;span className="md-inputfield"&gt;<br/>
                        &emsp;&emsp;&lt;InputText/&gt;<br/>
                        &emsp;&emsp;&lt;label>Name&lt;/label&gt;<br/>
                        &lt;/span>
</pre>

                    <h1>Shadows</h1>
                    <p>5 levels of shadows are provided varying from ui-shadow-1 to ui-shadow-5 to define the level of depth.</p>

                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                            <div className="shadow-box"></div>
                        </div>
                        <div className="p-col-12 p-md-2">
                            <div className="shadow-box ui-shadow-1"></div>
                        </div>
                        <div className="p-col-12 p-md-2">
                            <div className="shadow-box ui-shadow-2"></div>
                        </div>
                        <div className="p-col-12 p-md-2">
                            <div className="shadow-box ui-shadow-3"></div>
                        </div>
                        <div className="p-col-12 p-md-2">
                            <div className="shadow-box ui-shadow-4"></div>
                        </div>
                        <div className="p-col-12 p-md-2">
                            <div className="shadow-box ui-shadow-5"></div>
                        </div>
                    </div>
                    <pre>
&lt;div className="p-grid"&gt;<br/>
&emsp;&lt;div className="p-col-12 p-md-2"&gt;<br/>
&emsp;&emsp;&lt;div className="shadow-box"&gt;&lt;/div&gt;<br/>
&emsp;&lt;/div&gt;<br/>
&emsp;&lt;div className="p-col-12 p-md-2"&gt;<br/>
&emsp;&emsp;&lt;div className="shadow-box ui-shadow-1"&gt;&lt;/div&gt;<br/>
&emsp;&lt;/div&gt;<br/>
&emsp;&lt;div className="p-col-12 p-md-2"&gt;<br/>
&emsp;&emsp;&lt;div className="shadow-box ui-shadow-2"&gt;&lt;/div&gt;<br/>
&emsp;&lt;/div&gt;<br/>
&emsp;&lt;div className="p-col-12 p-md-2"&gt;<br/>
&emsp;&emsp;&lt;div className="shadow-box ui-shadow-3"&gt;&lt;/div&gt;<br/>
&emsp;&lt;/div&gt;<br/>
&emsp;&lt;div className="p-col-12 p-md-2"&gt;<br/>
&emsp;&emsp;&lt;div className="shadow-box ui-shadow-4"&gt;&lt;/div&gt;<br/>
&emsp;&lt;/div&gt;<br/>
&emsp;&lt;div className="p-col-12 p-md-2"&gt;<br/>
&emsp;&emsp;&lt;div className="shadow-box ui-shadow-5"&gt;&lt;/div&gt;<br/>
&emsp;&lt;/div&gt;<br/>
&lt;/div&gt;
</pre>

                    <h1>Icons</h1>
                    <p><a href="https://design.google.com/icons/">All material icons</a> have been ported
                        using <i>pi-md-</i> convention. To use an icon within a component
                        such as button below, define it using the icon attribute prefixed by <i>pi-md-</i>.</p>

                    <div style={{textAlign:'center', marginBottom:'16px'}}>
                        <Button label="pi-md-check" icon="pi-md-check"></Button>
                    </div>

                    <pre>
&lt;Button label="pi-md-check" icon="pi-md-check"&gt;&lt;/Button&gt;
</pre>

                    <div className="p-grid icon-grid">
                        <div className="p-col-12 p-md-2"><i className="pi-md-3d-rotation"></i>3d-rotation</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-ac-unit"></i>ac-unit</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-access-alarm"></i>access-alarm</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-access-alarms"></i>access-alarms</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-access-time"></i>access-time</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-accessibility"></i>accessibility</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-accessible"></i>accessible</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-account-balance"></i>account-balance</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-account-balance-wallet"></i>account-balance-wallet</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-account-box"></i>account-box</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-account-circle"></i>account-circle</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-add"></i>add</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-add-a-photo"></i>add-a-photo</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-add-alarm"></i>add-alarm</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-add-alert"></i>add-alert</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-add-box"></i>add-box</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-add-circle"></i>add-circle</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-add-circle-outline"></i>add-circle-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-add-location"></i>add-location</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-add-shopping-cart"></i>add-shopping-cart</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-add-to-photos"></i>add-to-photos</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-add-to-queue"></i>add-to-queue</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-adjust"></i>adjust</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-airline-seat-flat"></i>airline-seat-flat</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-airline-seat-flat-angled"></i>airline-seat-flat-angled</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-airline-seat-individual-suite"></i>airline-seat-individual-suite</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-airline-seat-legroom-extra"></i>airline-seat-legroom-extra</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-airline-seat-legroom-normal"></i>airline-seat-legroom-normal</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-airline-seat-legroom-reduced"></i>airline-seat-legroom-reduced</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-airline-seat-recline-extra"></i>airline-seat-recline-extra</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-airline-seat-recline-normal"></i>airline-seat-recline-normal</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-airplanemode-active"></i>airplanemode-active</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-airplanemode-inactive"></i>airplanemode-inactive</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-airplay"></i>airplay</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-airport-shuttle"></i>airport-shuttle</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-alarm"></i>alarm</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-alarm-add"></i>alarm-add</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-alarm-off"></i>alarm-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-alarm-on"></i>alarm-on</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-album"></i>album</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-all-inclusive"></i>all-inclusive</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-all-out"></i>all-out</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-android"></i>android</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-announcement"></i>announcement</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-apps"></i>apps</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-archive"></i>archive</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-arrow-back"></i>arrow-back</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-arrow-downward"></i>arrow-downward</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-arrow-drop-down"></i>arrow-drop-down</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-arrow-drop-down-circle"></i>arrow-drop-down-circle</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-arrow-drop-up"></i>arrow-drop-up</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-arrow-forward"></i>arrow-forward</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-arrow-upward"></i>arrow-upward</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-art-track"></i>art-track</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-aspect-ratio"></i>aspect-ratio</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-assessment"></i>assessment</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-assignment"></i>assignment</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-assignment-ind"></i>assignment-ind</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-assignment-late"></i>assignment-late</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-assignment-return"></i>assignment-return</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-assignment-returned"></i>assignment-returned</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-assignment-turned-in"></i>assignment-turned-in</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-assistant"></i>assistant</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-assistant-photo"></i>assistant-photo</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-attach-file"></i>attach-file</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-attach-money"></i>attach-money</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-attachment"></i>attachment</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-audiotrack"></i>audiotrack</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-autorenew"></i>autorenew</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-av-timer"></i>av-timer</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-backspace"></i>backspace</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-backup"></i>backup</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-battery-alert"></i>battery-alert</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-battery-charging-full"></i>battery-charging-full</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-battery-full"></i>battery-full</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-battery-std"></i>battery-std</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-battery-unknown"></i>battery-unknown</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-beach-access"></i>beach-access</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-beenhere"></i>beenhere</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-block"></i>block</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-bluetooth"></i>bluetooth</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-bluetooth-audio"></i>bluetooth-audio</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-bluetooth-connected"></i>bluetooth-connected</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-bluetooth-disabled"></i>bluetooth-disabled</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-bluetooth-searching"></i>bluetooth-searching</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-blur-circular"></i>blur-circular</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-blur-linear"></i>blur-linear</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-blur-off"></i>blur-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-blur-on"></i>blur-on</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-book"></i>book</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-bookmark"></i>bookmark</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-bookmark-border"></i>bookmark-border</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-border-all"></i>border-all</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-border-bottom"></i>border-bottom</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-border-clear"></i>border-clear</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-border-color"></i>border-color</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-border-horizontal"></i>border-horizontal</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-border-inner"></i>border-inner</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-border-left"></i>border-left</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-border-outer"></i>border-outer</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-border-right"></i>border-right</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-border-style"></i>border-style</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-border-top"></i>border-top</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-border-vertical"></i>border-vertical</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-branding-watermark"></i>branding-watermark</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-brightness-1"></i>brightness-1</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-brightness-2"></i>brightness-2</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-brightness-3"></i>brightness-3</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-brightness-4"></i>brightness-4</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-brightness-5"></i>brightness-5</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-brightness-6"></i>brightness-6</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-brightness-7"></i>brightness-7</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-brightness-auto"></i>brightness-auto</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-brightness-high"></i>brightness-high</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-brightness-low"></i>brightness-low</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-brightness-medium"></i>brightness-medium</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-broken-image"></i>broken-image</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-brush"></i>brush</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-bubble-chart"></i>bubble-chart</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-bug-report"></i>bug-report</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-build"></i>build</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-burst-mode"></i>burst-mode</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-business"></i>business</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-business-center"></i>business-center</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-cached"></i>cached</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-cake"></i>cake</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-call"></i>call</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-call-end"></i>call-end</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-call-made"></i>call-made</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-call-merge"></i>call-merge</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-call-missed"></i>call-missed</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-call-missed-outgoing"></i>call-missed-outgoing</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-call-received"></i>call-received</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-call-split"></i>call-split</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-call-to-action"></i>call-to-action</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-camera"></i>camera</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-camera-alt"></i>camera-alt</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-camera-enhance"></i>camera-enhance</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-camera-front"></i>camera-front</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-camera-rear"></i>camera-rear</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-camera-roll"></i>camera-roll</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-cancel"></i>cancel</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-card-giftcard"></i>card-giftcard</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-card-membership"></i>card-membership</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-card-travel"></i>card-travel</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-casino"></i>casino</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-cast"></i>cast</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-cast-connected"></i>cast-connected</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-center-focus-strong"></i>center-focus-strong</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-center-focus-weak"></i>center-focus-weak</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-change-history"></i>change-history</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-chat"></i>chat</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-chat-bubble"></i>chat-bubble</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-chat-bubble-outline"></i>chat-bubble-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-check"></i>check</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-check-box"></i>check-box</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-check-box-outline-blank"></i>check-box-outline-blank</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-check-circle"></i>check-circle</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-chevron-left"></i>chevron-left</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-chevron-right"></i>chevron-right</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-child-care"></i>child-care</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-child-friendly"></i>child-friendly</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-chrome-reader-mode"></i>chrome-reader-mode</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-class"></i>class</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-clear"></i>clear</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-clear-all"></i>clear-all</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-close"></i>close</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-closed-caption"></i>closed-caption</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-cloud"></i>cloud</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-cloud-circle"></i>cloud-circle</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-cloud-done"></i>cloud-done</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-cloud-download"></i>cloud-download</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-cloud-off"></i>cloud-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-cloud-queue"></i>cloud-queue</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-cloud-upload"></i>cloud-upload</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-code"></i>code</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-collections"></i>collections</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-collections-bookmark"></i>collections-bookmark</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-color-lens"></i>color-lens</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-colorize"></i>colorize</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-comment"></i>comment</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-compare"></i>compare</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-compare-arrows"></i>compare-arrows</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-computer"></i>computer</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-confirmation-number"></i>confirmation-number</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-contact-mail"></i>contact-mail</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-contact-phone"></i>contact-phone</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-contacts"></i>contacts</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-content-copy"></i>content-copy</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-content-cut"></i>content-cut</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-content-paste"></i>content-paste</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-control-point"></i>control-point</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-control-point-duplicate"></i>control-point-duplicate</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-copyright"></i>copyright</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-create"></i>create</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-create-new-folder"></i>create-new-folder</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-credit-card"></i>credit-card</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-crop"></i>crop</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-crop-16-9"></i>crop-16-9</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-crop-3-2"></i>crop-3-2</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-crop-5-4"></i>crop-5-4</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-crop-7-5"></i>crop-7-5</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-crop-din"></i>crop-din</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-crop-free"></i>crop-free</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-crop-landscape"></i>crop-landscape</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-crop-original"></i>crop-original</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-crop-portrait"></i>crop-portrait</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-crop-rotate"></i>crop-rotate</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-crop-square"></i>crop-square</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-dashboard"></i>dashboard</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-data-usage"></i>data-usage</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-date-range"></i>date-range</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-dehaze"></i>dehaze</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-delete"></i>delete</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-delete-forever"></i>delete-forever</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-delete-sweep"></i>delete-sweep</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-description"></i>description</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-desktop-mac"></i>desktop-mac</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-desktop-windows"></i>desktop-windows</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-details"></i>details</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-developer-board"></i>developer-board</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-developer-mode"></i>developer-mode</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-device-hub"></i>device-hub</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-devices"></i>devices</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-devices-other"></i>devices-other</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-dialer-sip"></i>dialer-sip</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-dialpad"></i>dialpad</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-directions"></i>directions</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-directions-bike"></i>directions-bike</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-directions-boat"></i>directions-boat</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-directions-bus"></i>directions-bus</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-directions-car"></i>directions-car</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-directions-railway"></i>directions-railway</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-directions-run"></i>directions-run</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-directions-subway"></i>directions-subway</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-directions-transit"></i>directions-transit</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-directions-walk"></i>directions-walk</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-disc-full"></i>disc-full</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-dns"></i>dns</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-do-not-disturb"></i>do-not-disturb</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-do-not-disturb-alt"></i>do-not-disturb-alt</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-do-not-disturb-off"></i>do-not-disturb-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-do-not-disturb-on"></i>do-not-disturb-on</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-dock"></i>dock</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-domain"></i>domain</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-done"></i>done</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-done-all"></i>done-all</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-donut-large"></i>donut-large</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-donut-small"></i>donut-small</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-drafts"></i>drafts</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-drag-handle"></i>drag-handle</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-drive-eta"></i>drive-eta</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-dvr"></i>dvr</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-edit"></i>edit</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-edit-location"></i>edit-location</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-eject"></i>eject</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-email"></i>email</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-enhanced-encryption"></i>enhanced-encryption</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-equalizer"></i>equalizer</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-error"></i>error</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-error-outline"></i>error-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-euro-symbol"></i>euro-symbol</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-ev-station"></i>ev-station</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-event"></i>event</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-event-available"></i>event-available</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-event-busy"></i>event-busy</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-event-note"></i>event-note</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-event-seat"></i>event-seat</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-exit-to-app"></i>exit-to-app</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-expand-less"></i>expand-less</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-expand-more"></i>expand-more</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-explicit"></i>explicit</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-explore"></i>explore</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-exposure"></i>exposure</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-exposure-neg-1"></i>exposure-neg-1</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-exposure-neg-2"></i>exposure-neg-2</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-exposure-plus-1"></i>exposure-plus-1</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-exposure-plus-2"></i>exposure-plus-2</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-exposure-zero"></i>exposure-zero</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-extension"></i>extension</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-face"></i>face</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-fast-forward"></i>fast-forward</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-fast-rewind"></i>fast-rewind</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-favorite"></i>favorite</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-favorite-border"></i>favorite-border</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-featured-play-list"></i>featured-play-list</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-featured-video"></i>featured-video</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-feedback"></i>feedback</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-fiber-dvr"></i>fiber-dvr</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-fiber-manual-record"></i>fiber-manual-record</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-fiber-new"></i>fiber-new</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-fiber-pin"></i>fiber-pin</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-fiber-smart-record"></i>fiber-smart-record</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-file-download"></i>file-download</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-file-upload"></i>file-upload</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter"></i>filter</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-1"></i>filter-1</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-2"></i>filter-2</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-3"></i>filter-3</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-4"></i>filter-4</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-5"></i>filter-5</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-6"></i>filter-6</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-7"></i>filter-7</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-8"></i>filter-8</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-9"></i>filter-9</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-9-plus"></i>filter-9-plus</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-b-and-w"></i>filter-b-and-w</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-center-focus"></i>filter-center-focus</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-drama"></i>filter-drama</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-frames"></i>filter-frames</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-hdr"></i>filter-hdr</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-list"></i>filter-list</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-none"></i>filter-none</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-tilt-shift"></i>filter-tilt-shift</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-filter-vintage"></i>filter-vintage</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-find-in-page"></i>find-in-page</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-find-replace"></i>find-replace</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-fingerprint"></i>fingerprint</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-first-page"></i>first-page</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-fitness-center"></i>fitness-center</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-flag"></i>flag</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-flare"></i>flare</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-flash-auto"></i>flash-auto</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-flash-off"></i>flash-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-flash-on"></i>flash-on</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-flight"></i>flight</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-flight-land"></i>flight-land</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-flight-takeoff"></i>flight-takeoff</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-flip"></i>flip</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-flip-to-back"></i>flip-to-back</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-flip-to-front"></i>flip-to-front</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-folder"></i>folder</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-folder-open"></i>folder-open</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-folder-shared"></i>folder-shared</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-folder-special"></i>folder-special</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-font-download"></i>font-download</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-align-center"></i>format-align-center</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-align-justify"></i>format-align-justify</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-align-left"></i>format-align-left</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-align-right"></i>format-align-right</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-bold"></i>format-bold</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-clear"></i>format-clear</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-color-fill"></i>format-color-fill</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-color-reset"></i>format-color-reset</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-color-text"></i>format-color-text</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-indent-decrease"></i>format-indent-decrease</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-indent-increase"></i>format-indent-increase</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-italic"></i>format-italic</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-line-spacing"></i>format-line-spacing</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-list-bulleted"></i>format-list-bulleted</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-list-numbered"></i>format-list-numbered</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-paint"></i>format-paint</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-quote"></i>format-quote</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-shapes"></i>format-shapes</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-size"></i>format-size</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-strikethrough"></i>format-strikethrough</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-textdirection-l-to-r"></i>format-textdirection-l-to-r</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-textdirection-r-to-l"></i>format-textdirection-r-to-l</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-format-underlined"></i>format-underlined</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-forum"></i>forum</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-forward"></i>forward</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-forward-10"></i>forward-10</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-forward-30"></i>forward-30</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-forward-5"></i>forward-5</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-free-breakfast"></i>free-breakfast</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-fullscreen"></i>fullscreen</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-fullscreen-exit"></i>fullscreen-exit</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-functions"></i>functions</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-g-translate"></i>g-translate</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-gamepad"></i>gamepad</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-games"></i>games</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-gavel"></i>gavel</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-gesture"></i>gesture</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-get-app"></i>get-app</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-gif"></i>gif</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-golf-course"></i>golf-course</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-gps-fixed"></i>gps-fixed</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-gps-not-fixed"></i>gps-not-fixed</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-gps-off"></i>gps-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-grade"></i>grade</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-gradient"></i>gradient</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-grain"></i>grain</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-graphic-eq"></i>graphic-eq</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-grid-off"></i>grid-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-grid-on"></i>grid-on</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-group"></i>group</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-group-add"></i>group-add</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-group-work"></i>group-work</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-hd"></i>hd</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-hdr-off"></i>hdr-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-hdr-on"></i>hdr-on</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-hdr-strong"></i>hdr-strong</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-hdr-weak"></i>hdr-weak</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-headset"></i>headset</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-headset-mic"></i>headset-mic</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-healing"></i>healing</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-hearing"></i>hearing</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-help"></i>help</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-help-outline"></i>help-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-high-quality"></i>high-quality</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-highlight"></i>highlight</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-highlight-off"></i>highlight-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-history"></i>history</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-home"></i>home</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-hot-tub"></i>hot-tub</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-hotel"></i>hotel</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-hourglass-empty"></i>hourglass-empty</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-hourglass-full"></i>hourglass-full</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-http"></i>http</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-https"></i>https</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-image"></i>image</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-image-aspect-ratio"></i>image-aspect-ratio</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-import-contacts"></i>import-contacts</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-import-export"></i>import-export</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-important-devices"></i>important-devices</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-inbox"></i>inbox</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-indeterminate-check-box"></i>indeterminate-check-box</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-info"></i>info</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-info-outline"></i>info-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-input"></i>input</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-insert-chart"></i>insert-chart</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-insert-comment"></i>insert-comment</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-insert-drive-file"></i>insert-drive-file</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-insert-emoticon"></i>insert-emoticon</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-insert-invitation"></i>insert-invitation</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-insert-link"></i>insert-link</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-insert-photo"></i>insert-photo</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-invert-colors"></i>invert-colors</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-invert-colors-off"></i>invert-colors-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-iso"></i>iso</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-keyboard"></i>keyboard</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-keyboard-arrow-down"></i>keyboard-arrow-down</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-keyboard-arrow-left"></i>keyboard-arrow-left</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-keyboard-arrow-right"></i>keyboard-arrow-right</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-keyboard-arrow-up"></i>keyboard-arrow-up</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-keyboard-backspace"></i>keyboard-backspace</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-keyboard-capslock"></i>keyboard-capslock</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-keyboard-hide"></i>keyboard-hide</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-keyboard-return"></i>keyboard-return</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-keyboard-tab"></i>keyboard-tab</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-keyboard-voice"></i>keyboard-voice</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-kitchen"></i>kitchen</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-label"></i>label</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-label-outline"></i>label-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-landscape"></i>landscape</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-language"></i>language</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-laptop"></i>laptop</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-laptop-chromebook"></i>laptop-chromebook</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-laptop-mac"></i>laptop-mac</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-laptop-windows"></i>laptop-windows</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-last-page"></i>last-page</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-launch"></i>launch</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-layers"></i>layers</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-layers-clear"></i>layers-clear</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-leak-add"></i>leak-add</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-leak-remove"></i>leak-remove</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-lens"></i>lens</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-library-add"></i>library-add</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-library-books"></i>library-books</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-library-music"></i>library-music</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-lightbulb-outline"></i>lightbulb-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-line-style"></i>line-style</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-line-weight"></i>line-weight</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-linear-scale"></i>linear-scale</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-link"></i>link</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-linked-camera"></i>linked-camera</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-list"></i>list</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-live-help"></i>live-help</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-live-tv"></i>live-tv</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-activity"></i>local-activity</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-airport"></i>local-airport</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-atm"></i>local-atm</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-bar"></i>local-bar</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-cafe"></i>local-cafe</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-car-wash"></i>local-car-wash</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-convenience-store"></i>local-convenience-store</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-dining"></i>local-dining</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-drink"></i>local-drink</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-florist"></i>local-florist</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-gas-station"></i>local-gas-station</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-grocery-store"></i>local-grocery-store</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-hospital"></i>local-hospital</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-hotel"></i>local-hotel</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-laundry-service"></i>local-laundry-service</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-library"></i>local-library</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-mall"></i>local-mall</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-movies"></i>local-movies</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-offer"></i>local-offer</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-parking"></i>local-parking</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-pharmacy"></i>local-pharmacy</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-phone"></i>local-phone</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-pizza"></i>local-pizza</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-play"></i>local-play</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-post-office"></i>local-post-office</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-printshop"></i>local-printshop</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-see"></i>local-see</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-shipping"></i>local-shipping</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-local-taxi"></i>local-taxi</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-location-city"></i>location-city</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-location-disabled"></i>location-disabled</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-location-off"></i>location-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-location-on"></i>location-on</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-location-searching"></i>location-searching</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-lock"></i>lock</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-lock-open"></i>lock-open</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-lock-outline"></i>lock-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-looks"></i>looks</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-looks-3"></i>looks-3</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-looks-4"></i>looks-4</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-looks-5"></i>looks-5</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-looks-6"></i>looks-6</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-looks-one"></i>looks-one</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-looks-two"></i>looks-two</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-loop"></i>loop</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-loupe"></i>loupe</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-low-priority"></i>low-priority</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-loyalty"></i>loyalty</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-mail"></i>mail</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-mail-outline"></i>mail-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-map"></i>map</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-markunread"></i>markunread</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-markunread-mailbox"></i>markunread-mailbox</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-memory"></i>memory</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-menu"></i>menu</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-merge-type"></i>merge-type</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-message"></i>message</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-mic"></i>mic</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-mic-none"></i>mic-none</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-mic-off"></i>mic-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-mms"></i>mms</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-mode-comment"></i>mode-comment</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-mode-edit"></i>mode-edit</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-monetization-on"></i>monetization-on</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-money-off"></i>money-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-monochrome-photos"></i>monochrome-photos</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-mood"></i>mood</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-mood-bad"></i>mood-bad</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-more"></i>more</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-more-horiz"></i>more-horiz</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-more-vert"></i>more-vert</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-motorcycle"></i>motorcycle</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-mouse"></i>mouse</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-move-to-inbox"></i>move-to-inbox</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-movie"></i>movie</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-movie-creation"></i>movie-creation</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-movie-filter"></i>movie-filter</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-multiline-chart"></i>multiline-chart</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-music-note"></i>music-note</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-music-video"></i>music-video</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-my-location"></i>my-location</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-nature"></i>nature</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-nature-people"></i>nature-people</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-navigate-before"></i>navigate-before</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-navigate-next"></i>navigate-next</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-navigation"></i>navigation</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-near-me"></i>near-me</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-network-cell"></i>network-cell</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-network-check"></i>network-check</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-network-locked"></i>network-locked</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-network-wifi"></i>network-wifi</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-new-releases"></i>new-releases</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-next-week"></i>next-week</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-nfc"></i>nfc</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-no-encryption"></i>no-encryption</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-no-sim"></i>no-sim</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-not-interested"></i>not-interested</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-note"></i>note</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-note-add"></i>note-add</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-notifications"></i>notifications</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-notifications-active"></i>notifications-active</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-notifications-none"></i>notifications-none</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-notifications-off"></i>notifications-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-notifications-paused"></i>notifications-paused</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-offline-pin"></i>offline-pin</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-ondemand-video"></i>ondemand-video</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-opacity"></i>opacity</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-open-in-browser"></i>open-in-browser</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-open-in-new"></i>open-in-new</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-open-with"></i>open-with</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-pages"></i>pages</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-pageview"></i>pageview</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-palette"></i>palette</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-pan-tool"></i>pan-tool</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-panorama"></i>panorama</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-panorama-fish-eye"></i>panorama-fish-eye</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-panorama-horizontal"></i>panorama-horizontal</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-panorama-vertical"></i>panorama-vertical</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-panorama-wide-angle"></i>panorama-wide-angle</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-party-mode"></i>party-mode</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-pause"></i>pause</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-pause-circle-filled"></i>pause-circle-filled</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-pause-circle-outline"></i>pause-circle-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-payment"></i>payment</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-people"></i>people</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-people-outline"></i>people-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-perm-camera-mic"></i>perm-camera-mic</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-perm-contact-calendar"></i>perm-contact-calendar</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-perm-data-setting"></i>perm-data-setting</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-perm-device-information"></i>perm-device-information</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-perm-identity"></i>perm-identity</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-perm-media"></i>perm-media</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-perm-phone-msg"></i>perm-phone-msg</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-perm-scan-wifi"></i>perm-scan-wifi</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-person"></i>person</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-person-add"></i>person-add</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-person-outline"></i>person-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-person-pin"></i>person-pin</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-person-pin-circle"></i>person-pin-circle</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-personal-video"></i>personal-video</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-pets"></i>pets</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phone"></i>phone</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phone-android"></i>phone-android</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phone-bluetooth-speaker"></i>phone-bluetooth-speaker</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phone-forwarded"></i>phone-forwarded</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phone-in-talk"></i>phone-in-talk</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phone-iphone"></i>phone-iphone</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phone-locked"></i>phone-locked</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phone-missed"></i>phone-missed</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phone-paused"></i>phone-paused</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phonelink"></i>phonelink</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phonelink-erase"></i>phonelink-erase</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phonelink-lock"></i>phonelink-lock</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phonelink-off"></i>phonelink-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phonelink-ring"></i>phonelink-ring</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-phonelink-setup"></i>phonelink-setup</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-photo"></i>photo</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-photo-album"></i>photo-album</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-photo-camera"></i>photo-camera</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-photo-filter"></i>photo-filter</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-photo-library"></i>photo-library</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-photo-size-select-actual"></i>photo-size-select-actual</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-photo-size-select-large"></i>photo-size-select-large</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-photo-size-select-small"></i>photo-size-select-small</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-picture-as-pdf"></i>picture-as-pdf</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-picture-in-picture"></i>picture-in-picture</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-picture-in-picture-alt"></i>picture-in-picture-alt</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-pie-chart"></i>pie-chart</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-pie-chart-outlined"></i>pie-chart-outlined</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-pin-drop"></i>pin-drop</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-place"></i>place</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-play-arrow"></i>play-arrow</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-play-circle-filled"></i>play-circle-filled</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-play-circle-outline"></i>play-circle-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-play-for-work"></i>play-for-work</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-playlist-add"></i>playlist-add</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-playlist-add-check"></i>playlist-add-check</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-playlist-play"></i>playlist-play</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-plus-one"></i>plus-one</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-poll"></i>poll</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-polymer"></i>polymer</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-pool"></i>pool</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-portable-wifi-off"></i>portable-wifi-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-portrait"></i>portrait</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-power"></i>power</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-power-input"></i>power-input</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-power-settings-new"></i>power-settings-new</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-pregnant-woman"></i>pregnant-woman</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-present-to-all"></i>present-to-all</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-print"></i>print</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-priority-high"></i>priority-high</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-public"></i>public</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-publish"></i>publish</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-query-builder"></i>query-builder</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-question-answer"></i>question-answer</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-queue"></i>queue</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-queue-music"></i>queue-music</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-queue-play-next"></i>queue-play-next</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-radio"></i>radio</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-radio-button-checked"></i>radio-button-checked</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-radio-button-unchecked"></i>radio-button-unchecked</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-rate-review"></i>rate-review</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-receipt"></i>receipt</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-recent-actors"></i>recent-actors</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-record-voice-over"></i>record-voice-over</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-redeem"></i>redeem</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-redo"></i>redo</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-refresh"></i>refresh</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-remove"></i>remove</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-remove-circle"></i>remove-circle</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-remove-circle-outline"></i>remove-circle-outline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-remove-from-queue"></i>remove-from-queue</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-remove-red-eye"></i>remove-red-eye</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-remove-shopping-cart"></i>remove-shopping-cart</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-reorder"></i>reorder</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-repeat"></i>repeat</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-repeat-one"></i>repeat-one</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-replay"></i>replay</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-replay-10"></i>replay-10</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-replay-30"></i>replay-30</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-replay-5"></i>replay-5</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-reply"></i>reply</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-reply-all"></i>reply-all</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-report"></i>report</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-report-problem"></i>report-problem</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-restaurant"></i>restaurant</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-restaurant-menu"></i>restaurant-menu</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-restore"></i>restore</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-restore-page"></i>restore-page</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-ring-volume"></i>ring-volume</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-room"></i>room</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-room-service"></i>room-service</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-rotate-90-degrees-ccw"></i>rotate-90-degrees-ccw</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-rotate-left"></i>rotate-left</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-rotate-right"></i>rotate-right</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-rounded-corner"></i>rounded-corner</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-router"></i>router</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-rowing"></i>rowing</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-rss-feed"></i>rss-feed</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-rv-hookup"></i>rv-hookup</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-satellite"></i>satellite</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-save"></i>save</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-scanner"></i>scanner</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-schedule"></i>schedule</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-school"></i>school</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-screen-lock-landscape"></i>screen-lock-landscape</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-screen-lock-portrait"></i>screen-lock-portrait</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-screen-lock-rotation"></i>screen-lock-rotation</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-screen-rotation"></i>screen-rotation</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-screen-share"></i>screen-share</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sd-card"></i>sd-card</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sd-storage"></i>sd-storage</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-search"></i>search</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-security"></i>security</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-select-all"></i>select-all</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-send"></i>send</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sentiment-dissatisfied"></i>sentiment-dissatisfied</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sentiment-neutral"></i>sentiment-neutral</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sentiment-satisfied"></i>sentiment-satisfied</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sentiment-very-dissatisfied"></i>sentiment-very-dissatisfied</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sentiment-very-satisfied"></i>sentiment-very-satisfied</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings"></i>settings</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-applications"></i>settings-applications</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-backup-restore"></i>settings-backup-restore</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-bluetooth"></i>settings-bluetooth</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-brightness"></i>settings-brightness</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-cell"></i>settings-cell</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-ethernet"></i>settings-ethernet</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-input-antenna"></i>settings-input-antenna</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-input-component"></i>settings-input-component</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-input-composite"></i>settings-input-composite</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-input-hdmi"></i>settings-input-hdmi</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-input-svideo"></i>settings-input-svideo</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-overscan"></i>settings-overscan</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-phone"></i>settings-phone</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-power"></i>settings-power</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-remote"></i>settings-remote</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-system-daydream"></i>settings-system-daydream</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-settings-voice"></i>settings-voice</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-share"></i>share</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-shop"></i>shop</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-shop-two"></i>shop-two</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-shopping-basket"></i>shopping-basket</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-shopping-cart"></i>shopping-cart</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-short-text"></i>short-text</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-show-chart"></i>show-chart</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-shuffle"></i>shuffle</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-signal-cellular-4-bar"></i>signal-cellular-4-bar</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-signal-cellular-connected-no-internet-4-bar"></i>signal-cellular-connected-no-internet-4-bar</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-signal-cellular-no-sim"></i>signal-cellular-no-sim</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-signal-cellular-null"></i>signal-cellular-null</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-signal-cellular-off"></i>signal-cellular-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-signal-wifi-4-bar"></i>signal-wifi-4-bar</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-signal-wifi-4-bar-lock"></i>signal-wifi-4-bar-lock</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-signal-wifi-off"></i>signal-wifi-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sim-card"></i>sim-card</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sim-card-alert"></i>sim-card-alert</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-skip-next"></i>skip-next</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-skip-previous"></i>skip-previous</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-slideshow"></i>slideshow</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-slow-motion-video"></i>slow-motion-video</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-smartphone"></i>smartphone</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-smoke-free"></i>smoke-free</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-smoking-rooms"></i>smoking-rooms</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sms"></i>sms</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sms-failed"></i>sms-failed</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-snooze"></i>snooze</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sort"></i>sort</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sort-by-alpha"></i>sort-by-alpha</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-spa"></i>spa</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-space-bar"></i>space-bar</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-speaker"></i>speaker</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-speaker-group"></i>speaker-group</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-speaker-notes"></i>speaker-notes</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-speaker-notes-off"></i>speaker-notes-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-speaker-phone"></i>speaker-phone</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-spellcheck"></i>spellcheck</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-star"></i>star</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-star-border"></i>star-border</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-star-half"></i>star-half</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-stars"></i>stars</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-stay-current-landscape"></i>stay-current-landscape</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-stay-current-portrait"></i>stay-current-portrait</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-stay-primary-landscape"></i>stay-primary-landscape</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-stay-primary-portrait"></i>stay-primary-portrait</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-stop"></i>stop</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-stop-screen-share"></i>stop-screen-share</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-storage"></i>storage</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-store"></i>store</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-store-mall-directory"></i>store-mall-directory</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-straighten"></i>straighten</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-streetview"></i>streetview</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-strikethrough-s"></i>strikethrough-s</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-style"></i>style</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-subdirectory-arrow-left"></i>subdirectory-arrow-left</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-subdirectory-arrow-right"></i>subdirectory-arrow-right</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-subject"></i>subject</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-subscriptions"></i>subscriptions</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-subtitles"></i>subtitles</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-subway"></i>subway</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-supervisor-account"></i>supervisor-account</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-surround-sound"></i>surround-sound</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-swap-calls"></i>swap-calls</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-swap-horiz"></i>swap-horiz</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-swap-vert"></i>swap-vert</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-swap-vertical-circle"></i>swap-vertical-circle</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-switch-camera"></i>switch-camera</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-switch-video"></i>switch-video</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sync"></i>sync</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sync-disabled"></i>sync-disabled</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-sync-problem"></i>sync-problem</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-system-update"></i>system-update</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-system-update-alt"></i>system-update-alt</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-tab"></i>tab</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-tab-unselected"></i>tab-unselected</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-tablet"></i>tablet</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-tablet-android"></i>tablet-android</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-tablet-mac"></i>tablet-mac</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-tag-faces"></i>tag-faces</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-tap-and-play"></i>tap-and-play</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-terrain"></i>terrain</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-text-fields"></i>text-fields</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-text-format"></i>text-format</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-textsms"></i>textsms</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-texture"></i>texture</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-theaters"></i>theaters</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-thumb-down"></i>thumb-down</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-thumb-up"></i>thumb-up</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-thumbs-up-down"></i>thumbs-up-down</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-time-to-leave"></i>time-to-leave</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-timelapse"></i>timelapse</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-timeline"></i>timeline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-timer"></i>timer</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-timer-10"></i>timer-10</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-timer-3"></i>timer-3</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-timer-off"></i>timer-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-title"></i>title</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-toc"></i>toc</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-today"></i>today</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-toll"></i>toll</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-tonality"></i>tonality</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-touch-app"></i>touch-app</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-toys"></i>toys</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-track-changes"></i>track-changes</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-traffic"></i>traffic</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-train"></i>train</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-tram"></i>tram</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-transfer-within-a-station"></i>transfer-within-a-station</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-transform"></i>transform</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-translate"></i>translate</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-trending-down"></i>trending-down</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-trending-flat"></i>trending-flat</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-trending-up"></i>trending-up</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-tune"></i>tune</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-turned-in"></i>turned-in</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-turned-in-not"></i>turned-in-not</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-tv"></i>tv</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-unarchive"></i>unarchive</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-undo"></i>undo</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-unfold-less"></i>unfold-less</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-unfold-more"></i>unfold-more</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-update"></i>update</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-usb"></i>usb</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-verified-user"></i>verified-user</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-vertical-align-bottom"></i>vertical-align-bottom</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-vertical-align-center"></i>vertical-align-center</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-vertical-align-top"></i>vertical-align-top</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-vibration"></i>vibration</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-video-call"></i>video-call</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-video-label"></i>video-label</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-video-library"></i>video-library</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-videocam"></i>videocam</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-videocam-off"></i>videocam-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-videogame-asset"></i>videogame-asset</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-view-agenda"></i>view-agenda</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-view-array"></i>view-array</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-view-carousel"></i>view-carousel</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-view-column"></i>view-column</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-view-comfy"></i>view-comfy</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-view-compact"></i>view-compact</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-view-day"></i>view-day</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-view-headline"></i>view-headline</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-view-list"></i>view-list</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-view-module"></i>view-module</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-view-quilt"></i>view-quilt</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-view-stream"></i>view-stream</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-view-week"></i>view-week</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-vignette"></i>vignette</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-visibility"></i>visibility</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-visibility-off"></i>visibility-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-voice-chat"></i>voice-chat</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-voicemail"></i>voicemail</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-volume-down"></i>volume-down</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-volume-mute"></i>volume-mute</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-volume-off"></i>volume-off</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-volume-up"></i>volume-up</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-vpn-key"></i>vpn-key</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-vpn-lock"></i>vpn-lock</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-wallpaper"></i>wallpaper</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-warning"></i>warning</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-watch"></i>watch</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-watch-later"></i>watch-later</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-wb-auto"></i>wb-auto</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-wb-cloudy"></i>wb-cloudy</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-wb-incandescent"></i>wb-incandescent</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-wb-iridescent"></i>wb-iridescent</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-wb-sunny"></i>wb-sunny</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-wc"></i>wc</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-web"></i>web</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-web-asset"></i>web-asset</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-weekend"></i>weekend</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-whatshot"></i>whatshot</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-widgets"></i>widgets</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-wifi"></i>wifi</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-wifi-lock"></i>wifi-lock</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-wifi-tethering"></i>wifi-tethering</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-work"></i>work</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-wrap-text"></i>wrap-text</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-youtube-searched-for"></i>youtube-searched-for</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-zoom-in"></i>zoom-in</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-zoom-out"></i>zoom-out</div>
                        <div className="p-col-12 p-md-2"><i className="pi-md-zoom-out-map"></i>zoom-out-map</div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}